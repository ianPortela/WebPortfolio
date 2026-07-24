import { type TechIcon } from "../components/ContentComponents/Tag"
import statistics  from "../assets/images/tds/imgTDS1.webp"
import info  from "../assets/images/tds/imgTDS8.webp"
import travels  from "../assets/images/tds/imgTDS4.webp"
import methods  from "../assets/images/tds/imgTDS5.webp"
import home  from "../assets/images/tds/imgTDS7.webp"


interface Project {
    id:string,
    title:string,
    description: {
        objetivo:string
        librerias:{
            lib:string,
            use:string
        }[],
        screens:{
            name:string,
            image:string,
            sections: {
                title:string,
                items:string[]
            }[]
        }[]
    },
    technologies: ReadonlyArray<TechIcon>,
    github:string,
    features:{
        title:string,
        description:string
    }[]
}

export const projects: Project[] = [
    {
        id: "TDS",
        title: "Transport Document Scanner",
        description: {
            objetivo: `El proyecto surge a partir de la necesidad de digitalizar y organizar el registro de viajes
                    realizados por un transportista de cargas. 
                    El proceso existente consistía en registrar manualmente la información obtenida de Cartas de Porte y Remitos, 
                    generando pérdida de tiempo y posibilidad de errores.`,
            librerias: [
                {
                    lib:"Apache POI",
                    use: "Se utilizo para el manejo de archivos excel, especialmente operaciones de escritura / lectura."
                },
                {
                    lib:"Camera X",
                    use:"Se utilizo para el manejo de la camara."
                },
                {
                    lib:"JetPack Compose",
                    use:"Se utilizo para crear la UI a traves de la creacion de componentes reutilizables."
                },
                {
                    lib:"Hilt",
                    use:"Se utilizo para implementar la inyeccion de dependencias. Gracias a esto, la creacion de objetos como la base de datos, el repositorio y los ViewModels queda centralizada y automatica."
                },
                {
                    lib:"Ml Kit - Text Recognition",
                    use:"Se utilizo para el reconocimiento optico de caracteres"
                },
                {
                    lib:"Navigation Compose",
                    use:"Se utilizo para implementar la navegacion dentro de la app."
                },
            ],
            screens: [
                {
                    name: "Inicio",
                    image: home,
                    sections: [
                        {
                            title: "Objetivo",
                            items: [
                                "Mostrar la cantidad de viajes registrados durante el mes actual.",
                                "Mostrar el último viaje registrado."
                            ]
                        },
                        {
                            title: "Funcionalidades",
                            items: [
                                "Exportar los viajes del mes actual a un archivo Excel.",
                                "Navegar a la pantalla de estadísticas."
                            ]
                        },
                        {
                            title: "Proceso de exportación",
                            items: [
                                "Verifica si el archivo de Excel existe.",
                                "Si existe, busca la hoja correspondiente al mes actual y registra los viajes.",
                                "Si no existe, crea un nuevo archivo llamado 'Registro_Viajes_[año actual].xlsx'."
                            ]
                        }
                    ]
                },
                {
                    name: "Registrar",
                    image: methods,
                    sections: [
                        {
                            title: "Objetivo",
                            items: [
                                "Permitir registrar un viaje seleccionando el tipo de documento correspondiente."
                            ]
                        },
                        {
                            title: "Tipos de documento",
                            items: [
                                "Carta de Porte.",
                                "Remito."
                            ]
                        },
                        {
                            title: "Importancia de la selección",
                            items: [
                                "Las validaciones aplicadas durante el registro dependen del tipo de documento seleccionado."
                            ]
                        },
                        {
                            title: "Métodos de registro",
                            items: [
                                "Carga de PDF (disponible únicamente para Cartas de Porte).",
                                "Carga manual mediante un formulario.",
                                "OCR guiado para capturar cada dato del documento de forma individual."
                            ]
                        }
                    ]
                },
                {
                    name: "Viajes",
                    image: travels,
                    sections: [
                        {
                            title: "Objetivo",
                            items: [
                                "Visualizar todos los viajes registrados."
                            ]
                        },
                        {
                            title: "Información mostrada",
                            items: [
                                "Fecha.",
                                "Origen.",
                                "Destino.",
                                "Producto.",
                                "Distancia."
                            ]
                        },
                        {
                            title: "Funcionalidades",
                            items: [
                                "Editar un viaje manualmente.",
                                "Visualizar toda la información del viaje.",
                                "Eliminar un viaje de la base de datos."
                            ]
                        },
                        {
                            title: "Información detallada",
                            items: [
                                "Fecha.",
                                "Origen.",
                                "Destino.",
                                "Distancia.",
                                "Producto.",
                                "Peso.",
                                "Remito / CTG.",
                                "Tarifa.",
                                "Monto."
                            ]
                        },
                        {
                            title: "Observaciones",
                            items: [
                                "Las operaciones de edición y eliminación afectan únicamente la base de datos.",
                                "Para reflejar los cambios en el archivo Excel es necesario realizar una nueva exportación."
                            ]
                        }
                    ]
                },
                {
                    name: "Información",
                    image: info,
                    sections: [
                        {
                            title: "Objetivo",
                            items: [
                                "Brindar información sobre la aplicación y sus principales funcionalidades."
                            ]
                        },
                        {
                            title: "Información disponible",
                            items: [
                                "Objetivo principal de la aplicación.",
                                "Funcionalidades principales.",
                                "Versión de la aplicación.",
                                "Desarrollador.",
                                "Información de contacto."
                            ]
                        }
                    ]
                },
                {
                    name: "Estadísticas",
                    image: statistics,
                    sections: [
                        {
                            title: "Objetivo",
                            items: [
                                "Mostrar estadísticas calculadas a partir de los viajes registrados."
                            ]
                        },
                        {
                            title: "Información mostrada",
                            items: [
                                "Facturación total y cantidad de viajes.",
                                "Kilómetros totales recorridos.",
                                "Producto más transportado.",
                                "Destino más visitado.",
                                "Kilómetros promedio por viaje.",
                                "Total a cobrar."
                            ]
                        },
                        {
                            title: "Funcionalidades",
                            items: [
                                "Visualizar las estadísticas del mes actual.",
                                "Visualizar las estadísticas del mes anterior.",
                                "Calcular el total a cobrar en función de un porcentaje ingresado por el usuario."
                            ]
                        }
                    ]
                }
            ]
        },
        technologies: [
            "Kotlin", "Room"
        ],
        github: "",
        features: [
            {
                title: "Exportación a Excel",
                description:
                    "Genera un archivo Excel con los viajes registrados del mes, creando el archivo automáticamente si no existe."
            },
            {
                title: "Registro de viajes",
                description:
                    "Permite registrar viajes mediante carga manual, importación de PDF o reconocimiento OCR guiado."
            },
            {
                title: "Gestión de viajes",
                description:
                    "Permite visualizar, editar, consultar y eliminar viajes almacenados en la base de datos."
            },
            {
                title: "Estadísticas mensuales",
                description:
                    "Calcula indicadores como facturación, kilómetros recorridos, producto más transportado, destino más visitado y promedio de kilómetros."
            },
            {
                title: "Cálculo de cobro",
                description:
                    "Calcula el total a cobrar aplicando un porcentaje sobre la facturación, según la modalidad habitual de trabajo de los camioneros."
            },
            {
                title: "Funcionamiento sin conexión",
                description:
                    "Los viajes se almacenan localmente, permitiendo utilizar la aplicación sin necesidad de conexión a Internet."
            }
        ],
    },
]