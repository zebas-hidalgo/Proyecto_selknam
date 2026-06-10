# juego.gd - Novela Visual Selk'nam (Instanciación 100% Procedural)
extends Control

# Variables del Estado de Supervivencia
var temperatura = 100
var energia = 100
var refugio = false

# Nodos de Interfaz creados dinámicamente
var fondo: TextureRect
var panel_narrativa: ColorRect
var texto_narrativo: RichTextLabel
var contenedor_opciones: VBoxContainer
var label_temperatura: Label
var label_energia: Label
var label_refugio: Label
var panel_stats: Panel

# Diccionario con el árbol de decisiones e historia real
var historia = {
	"inicio": {
		"texto": "Una densa tormenta de nieve azota tu Haruwen ancestral. La fogata principal esta por apagarse y tu familia tiembla de frio. ¿Que decides hacer?",
		"opciones": [
			{"texto": "Buscar ramas secas en el bosque bajo la tormenta", "destino": "bosque_leña"},
			{"texto": "Refugiarse en la choza y esperar a que pase el viento", "destino": "choza_espera"}
		]
	},
	"bosque_leña": {
		"texto": "Encuentras ramas secas bajo los arboles de lenga. Sin embargo, caminar bajo la tormenta congela tu cuerpo y te agota. Pierdes 30 de temperatura y 20 de energia, pero consigues madera.",
		"efectos": {"temperatura": -30, "energia": -20, "refugio": false},
		"opciones": [
			{"texto": "Regresar a la choza a avivar el fuego con la leña", "destino": "fogata_encendida"}
		]
	},
	"choza_espera": {
		"texto": "Decides quedarte en la choza sin leña. Ahorras energia, pero la fogata se apaga por completo. Tu temperatura corporal cae peligrosamente en 40 puntos.",
		"efectos": {"temperatura": -40, "energia": 0, "refugio": true},
		"opciones": [
			{"texto": "Salir ahora a buscar ramas secas a pesar del frio", "destino": "bosque_leña"},
			{"texto": "Compartir el calor corporal con tu familia", "destino": "calor_familiar"}
		]
	},
	"fogata_encendida": {
		"texto": "¡Logras encender un gran fuego! El calor inunda la choza. Tu temperatura se recupera al maximo. Pero tienen hambre y necesitan comida.",
		"efectos": {"temperatura": 100, "energia": 10, "refugio": true},
		"opciones": [
			{"texto": "Salir a cazar guanacos con tu arco y flecha", "destino": "caza_guanacos"},
			{"texto": "Recolectar hongos del bosque cercanos", "destino": "recoleccion_hongos"}
		]
	},
	"calor_familiar": {
		"texto": "El calor familiar evita que mueran de frio inmediatamente, ganando 10 de temperatura, pero no tienen comida y el cansancio aumenta.",
		"efectos": {"temperatura": 10, "energia": -20, "refugio": true},
		"opciones": [
			{"texto": "Salir al amanecer a cazar guanacos", "destino": "caza_guanacos"}
		]
	},
	"caza_guanacos": {
		"texto": "Encuentras una manada en la estepa. Tras horas de acecho, logras cazar un guanaco. Tienen carne y pieles. Tu energia sube en 40 puntos.",
		"efectos": {"temperatura": -10, "energia": 40, "refugio": false},
		"opciones": [
			{"texto": "Celebrar una ceremonia y agradecer a los espiritus", "destino": "victoria"}
		]
	},
	"recoleccion_hongos": {
		"texto": "Los hongos del bosque calman el hambre, pero aportan poca energia (ganas 10). La tormenta arrecia.",
		"efectos": {"temperatura": -15, "energia": 10, "refugio": false},
		"opciones": [
			{"texto": "Ir a cazar guanacos para conseguir pieles", "destino": "caza_guanacos"}
		]
	},
	"victoria": {
		"texto": "¡Tu clan ha sobrevivido al crudo invierno patagonico! Las pieles de guanaco y la fogata encendida mantendran calida a tu familia hasta la primavera. Has protegido la memoria viva del Hain.",
		"opciones": [
			{"texto": "Jugar de nuevo", "destino": "reiniciar"}
		]
	},
	"game_over_frio": {
		"texto": "GAME OVER: El frio extremo congelo tu cuerpo. Sin una fogata a tiempo, tu familia no logro resistir el invierno de Karukinka.",
		"opciones": [
			{"texto": "Volver a intentar", "destino": "reiniciar"}
		]
	},
	"game_over_energia": {
		"texto": "GAME OVER: Caiste desmayado por inanicion y fatiga extrema en medio de la nieve. La busqueda de recursos supero tus fuerzas.",
		"opciones": [
			{"texto": "Volver a intentar", "destino": "reiniciar"}
		]
	}
}

func _ready():
	# 1. Construir la UI dinámicamente mediante código (Procedural)
	construir_ui()
	
	# 2. Iniciar el juego
	cargar_nodo_narrativo("inicio")

func construir_ui():
	# Fondo de Pantalla (Negro profundo)
	fondo = TextureRect.new()
	fondo.name = "Fondo"
	fondo.layout_mode = 1
	fondo.anchors_preset = PRESET_FULL_RECT
	# Colorear el fondo de negro con un ColorRect interno si no hay textura
	var color_fondo = ColorRect.new()
	color_fondo.color = Color(0.06, 0.04, 0.04) # Carbón
	color_fondo.anchors_preset = PRESET_FULL_RECT
	fondo.add_child(color_fondo)
	add_child(fondo)

	# Panel de Narrativa (Glassmorphism / Caja negra translúcida)
	panel_narrativa = ColorRect.new()
	panel_narrativa.color = Color(0.08, 0.06, 0.06, 0.85)
	panel_narrativa.layout_mode = 1
	panel_narrativa.anchors_preset = PRESET_BOTTOM_WIDE
	panel_narrativa.custom_minimum_size = Vector2(0, 220)
	add_child(panel_narrativa)

	# Texto Narrativo
	texto_narrativo = RichTextLabel.new()
	texto_narrativo.name = "TextoNarrativo"
	texto_narrativo.layout_mode = 1
	texto_narrativo.anchors_preset = PRESET_FULL_RECT
	texto_narrativo.offset_left = 30
	texto_narrativo.offset_top = 20
	texto_narrativo.offset_right = -40
	texto_narrativo.offset_bottom = -20
	texto_narrativo.bbcode_enabled = true
	texto_narrativo.text = "Cargando historia..."
	panel_narrativa.add_child(texto_narrativo)

	# Contenedor de Botones de Opciones (En el centro de la pantalla)
	contenedor_opciones = VBoxContainer.new()
	contenedor_opciones.name = "ContenedorOpciones"
	contenedor_opciones.layout_mode = 1
	contenedor_opciones.anchors_preset = PRESET_CENTER
	contenedor_opciones.custom_minimum_size = Vector2(500, 0)
	# Espaciado entre botones
	contenedor_opciones.alignment = BoxContainer.ALIGNMENT_CENTER
	add_child(contenedor_opciones)

	# Panel de Estadísticas (Parte superior derecha)
	panel_stats = Panel.new()
	panel_stats.custom_minimum_size = Vector2(300, 100)
	panel_stats.layout_mode = 1
	panel_stats.anchors_preset = PRESET_TOP_RIGHT
	panel_stats.offset_left = -320
	panel_stats.offset_top = 20
	add_child(panel_stats)

	var box_stats = VBoxContainer.new()
	box_stats.layout_mode = 1
	box_stats.anchors_preset = PRESET_FULL_RECT
	box_stats.offset_left = 15
	box_stats.offset_top = 10
	panel_stats.add_child(box_stats)

	label_temperatura = Label.new()
	label_temperatura.text = "Temperatura: 100%"
	box_stats.add_child(label_temperatura)

	label_energia = Label.new()
	label_energia.text = "Energia Vital: 100%"
	box_stats.add_child(label_energia)

	label_refugio = Label.new()
	label_refugio.text = "Refugio: No"
	box_stats.add_child(label_refugio)

func cargar_nodo_narrativo(nodo_id: String):
	if nodo_id == "reiniciar":
		temperatura = 100
		energia = 100
		refugio = false
		cargar_nodo_narrativo("inicio")
		return

	var nodo = historia[nodo_id]
	
	# Aplicar efectos a las variables si existen
	if nodo.has("efectos"):
		temperatura = clamp(temperatura + nodo["efectos"]["temperatura"], 0, 100)
		energia = clamp(energia + nodo["efectos"]["energia"], 0, 100)
		refugio = nodo["efectos"]["refugio"]

	# Actualizar etiquetas de estadísticas en pantalla
	label_temperatura.text = "Temperatura: " + str(temperatura) + "%"
	label_energia.text = "Energia Vital: " + str(energia) + "%"
	label_refugio.text = "Refugio: " + ("Si" if refugio else "No")

	# Cambiar colores según niveles críticos
	if temperatura < 35:
		label_temperatura.add_theme_color_override("font_color", Color(1, 0.3, 0.3))
	else:
		label_temperatura.add_theme_color_override("font_color", Color(1, 1, 1))

	if energia < 35:
		label_energia.add_theme_color_override("font_color", Color(1, 0.3, 0.3))
	else:
		label_energia.add_theme_color_override("font_color", Color(1, 1, 1))

	# Verificar condiciones de muerte antes de mostrar opciones
	if temperatura <= 0:
		cargar_nodo_narrativo("game_over_frio")
		return
	if energia <= 0:
		cargar_nodo_narrativo("game_over_energia")
		return

	# Mostrar el texto de la narrativa
	texto_narrativo.text = "[font_size=18]" + nodo["texto"] + "[/font_size]"

	# Limpiar botones del contenedor de opciones anterior
	for child in contenedor_opciones.get_children():
		child.queue_free()

	# Instanciar dinámicamente los botones para las nuevas opciones
	for opcion in nodo["opciones"]:
		var boton = Button.new()
		boton.text = opcion["texto"]
		boton.custom_minimum_size = Vector2(0, 45)
		boton.add_theme_font_size_override("font_size", 14)
		
		# Conectar la señal de clic mediante una función anónima (Callable) hacia el destino
		boton.pressed.connect(func(): cargar_nodo_narrativo(opcion["destino"]))
		
		contenedor_opciones.add_child(boton)
