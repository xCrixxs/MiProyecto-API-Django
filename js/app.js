import { getProductos, crearProducto, actualizarProducto, eliminarProducto } from './api.js';

let listaProductos = [];

document.addEventListener("DOMContentLoaded", () => {
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    const formulario = document.getElementById("form-producto");
    const inputId = document.getElementById("producto-id");
    const inputNombre = document.getElementById("producto-nombre");
    const inputPrecio = document.getElementById("producto-precio");

    // 1. Cargar productos si existe la tabla en la pantalla actual
    if (tablaCuerpo) {
        inicializar();
    }

    async function inicializar() {
        tablaCuerpo.innerHTML = "<tr><td colspan='4'>Cargando datos desde la API pública...</td></tr>";
        listaProductos = await getProductos();
        renderTabla();
    }

    function renderTabla() {
        if (!tablaCuerpo) return;
        tablaCuerpo.innerHTML = "";
        
        if (listaProductos.length === 0) {
            tablaCuerpo.innerHTML = "<tr><td colspan='4'>No hay datos disponibles.</td></tr>";
            return;
        }

        listaProductos.forEach(prod => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${prod.id}</td>
                <td>${prod.nombre}</td>
                <td>$${prod.precio}</td>
                <td>
                    <button class="btn-edit" data-id="${prod.id}" data-nombre="${prod.nombre}" data-precio="${prod.precio}">Editar</button>
                    <button class="btn-delete" data-id="${prod.id}">Eliminar</button>
                </td>
            `;
            tablaCuerpo.appendChild(tr);
        });
    }

    // 2. Guardar o Editar (POST / PUT)
    if (formulario) {
        formulario.addEventListener("submit", async (e) => {
            e.preventDefault();

            const id = inputId.value;
            const productoData = {
                nombre: inputNombre.value,
                precio: parseFloat(inputPrecio.value).toFixed(2)
            };

            if (id) {
                await actualizarProducto(id, productoData);
                const index = listaProductos.findIndex(p => p.id == id);
                if (index !== -1) {
                    listaProductos[index] = { id: id, ...productoData };
                }
                alert("¡Registro actualizado exitosamente con PUT!");
            } else {
                const nuevo = await crearProducto(productoData);
                listaProductos.push(nuevo);
                alert("¡Registro creado exitosamente con POST!");
            }

            formulario.reset();
            inputId.value = "";
            renderTabla();
        });
    }

    // 3. Escuchar clics SOLO en los botones de la tabla (evita interferir con el menú)
    if (tablaCuerpo) {
        tablaCuerpo.addEventListener("click", async (e) => {
            const objetivo = e.target;

            // ELIMINAR (DELETE)
            if (objetivo.classList.contains("btn-delete")) {
                const id = objetivo.getAttribute("data-id");
                if (confirm(`¿Seguro que deseas borrar el registro ID: ${id}?`)) {
                    const exito = await eliminarProducto(id);
                    if (exito) {
                        listaProductos = listaProductos.filter(p => p.id != id);
                        renderTabla();
                        alert(`Registro ${id} eliminado con DELETE.`);
                    }
                }
            }

            // EDITAR (Cargar datos)
            if (objetivo.classList.contains("btn-edit")) {
                inputId.value = objetivo.getAttribute("data-id");
                inputNombre.value = objetivo.getAttribute("data-nombre");
                inputPrecio.value = objetivo.getAttribute("data-precio");
            }
        });
    }
});