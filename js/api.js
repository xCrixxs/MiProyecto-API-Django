// Usamos la API pública de JSONPlaceholder (simula un backend completo)
const API_BASE_URL = "https://jsonplaceholder.typicode.com/posts";

/**
 * GET: Obtener la lista de elementos desde la API pública
 */
export async function getProductos() {
    try {
        const respuesta = await fetch(`${API_BASE_URL}?_limit=5`); // Limitamos a 5 para no saturar
        if (!respuesta.ok) throw new Error("Error al consultar la API");
        const datos = await respuesta.json();
        
        // Mapeamos los datos de la API pública para usarlos como "productos"
        return datos.map(item => ({
            id: item.id,
            nombre: item.title.substring(0, 20), // Usamos el título como nombre
            precio: (item.id * 150.50).toFixed(2) // Simulamos un precio
        }));
    } catch (error) {
        console.error("GET Error:", error);
        return [];
    }
}

/**
 * POST: Crear un nuevo registro en la API pública
 */
export async function crearProducto(producto) {
    try {
        const respuesta = await fetch(API_BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                title: producto.nombre,
                body: `Precio: $${producto.precio}`,
                userId: 1
            })
        });
        if (!respuesta.ok) throw new Error("Error al guardar en la API");
        const resultado = await respuesta.json();
        
        // Retornamos el objeto adaptado
        return {
            id: resultado.id,
            nombre: producto.nombre,
            precio: producto.precio
        };
    } catch (error) {
        console.error("POST Error:", error);
    }
}

/**
 * PUT: Actualizar un registro en la API pública
 */
export async function actualizarProducto(id, producto) {
    try {
        const respuesta = await fetch(`${API_BASE_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json; charset=UTF-8" },
            body: JSON.stringify({
                id: id,
                title: producto.nombre,
                body: `Precio: $${producto.precio}`,
                userId: 1
            })
        });
        if (!respuesta.ok) throw new Error("Error al actualizar en la API");
        return await respuesta.json();
    } catch (error) {
        console.error("PUT Error:", error);
    }
}

/**
 * DELETE: Eliminar un registro en la API pública
 */
export async function eliminarProducto(id) {
    try {
        const respuesta = await fetch(`${API_BASE_URL}/${id}`, {
            method: "DELETE"
        });
        if (!respuesta.ok) throw new Error("Error al borrar en la API");
        return true;
    } catch (error) {
        console.error("DELETE Error:", error);
        return false;
    }
}