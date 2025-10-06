 function mostrarSeccion(id) {
            document.querySelectorAll(".seccion").forEach(sec => {
                sec.classList.add("oculto");
            });
            document.getElementById(id).classList.remove("oculto");
        }

        document.getElementById("car-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const marca = document.getElementById("marca").value;
            const modelo = document.getElementById("modelo").value;
            const precio = document.getElementById("precio").value;
            const imagen = document.getElementById("imagen").value || "https://via.placeholder.com/150";

            const auto = { marca, modelo, precio, imagen };
            mostrarAutoTabla(auto);
            mostrarAutoGaleria(auto);
            document.getElementById("car-form").reset();
        });

        function mostrarAutoTabla(auto) {
            const tableBody = document.getElementById("cars-table-body");
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><img src="${auto.imagen}" alt="Imagen" width="100"></td>
                <td>${auto.marca}</td>
                <td>${auto.modelo}</td>
                <td>$${auto.precio}</td>
                <td>
                    <button onclick="editarAuto(this)">Editar</button>
                    <button onclick="eliminarAuto(this)">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(row);
        }

        function mostrarAutoGaleria(auto) {
            const galeria = document.getElementById("autos-galeria");
            const card = document.createElement("div");
            card.classList.add("auto-card");
            card.innerHTML = `
                <img src="${auto.imagen}" alt="Imagen de ${auto.marca} ${auto.modelo}">
                <h3>${auto.marca} ${auto.modelo}</h3>
                <p>Precio por día: $${auto.precio}</p>
                <p><a href="${auto.imagen}" target="_blank">Ver imagen</a></p>
            `;
            galeria.appendChild(card);
        }

        function eliminarAuto(button) {
            button.closest("tr").remove();
        }

        function editarAuto(button) {
            const row = button.closest("tr");
            const cells = row.querySelectorAll("td");

            const nuevaMarca = prompt("Marca:", cells[1].textContent);
            const nuevoModelo = prompt("Modelo:", cells[2].textContent);
            const nuevoPrecio = prompt("Precio por día:", cells[3].textContent.replace('$', ''));
            const nuevaImagen = prompt("URL de la imagen:", cells[0].querySelector("img").src);

            if (nuevaMarca && nuevoModelo && nuevoPrecio && nuevaImagen) {
                cells[0].querySelector("img").src = nuevaImagen;
                cells[1].textContent = nuevaMarca;
                cells[2].textContent = nuevoModelo;
                cells[3].textContent = `$${nuevoPrecio}`;
            }
        }

        document.getElementById("empleado-form").addEventListener("submit", function(event) {
            event.preventDefault();
            const nombre = document.getElementById("nombre-empleado").value;
            const edad = document.getElementById("edad-empleado").value;
            const correo = document.getElementById("correo-empleado").value;
            const telefono = document.getElementById("telefono-empleado").value;
            const sueldo = document.getElementById("sueldo-empleado").value;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${nombre}</td>
                <td>${edad}</td>
                <td>${correo}</td>
                <td>${telefono}</td>
                <td>$${sueldo}</td>
            `;
            document.getElementById("empleados-table-body").appendChild(row);
            document.getElementById("empleado-form").reset();
        });

        window.onload = function() {
            const autos = [
                { marca: "Toyota", modelo: "Corolla", precio: 30, imagen: "imajen/el rallo maquien.jpeg" },
                { marca: "Honda", modelo: "Civic", precio: 35, imagen: "imajen/carro1.jpeg" },
                { marca: "Ford", modelo: "Focus", precio: 25, imagen: "imajen/carro2.jpeg" },
                { marca: "Chevrolet", modelo: "Cruze", precio: 28, imagen: "imajen/carro3.jpeg" },
                { marca: "Mazda", modelo: "3", precio: 32, imagen: "imajen/carro4.jpeg" }
            ];

            autos.forEach(auto => {
                mostrarAutoTabla(auto);
                mostrarAutoGaleria(auto);
            });

            mostrarSeccion('inicio');
        };


