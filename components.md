# Info

- Recibe:
  isCall
- Estado:
  · Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea)
- Muestra:
  · El mensaje superior "Llamando..." cuando isCall es true
- Acciones del Usuario:

# Display

- Recibe:
  · Un array al clicar un key (phone)
- Estado:
- Muestra:
  · Los numeros de l'array phone
- Acciones del Usuario:

# Actions

- Recibe:
- Estado:
- Muestra:
  Acction
- Acciones del Usuario:

# Action

    - Recibe:
    - Estado:
      · activo cuando l'array phone sea lenght 9 con la clase "active".
    - Muestra:
      · Renderizar Llamar si isCall is false
      . Renderizar Colgar si isCall is true
    - Acciones del Usuario:
      · Si  phone.lenght = 9 poder
          clicar sobre llamar y  mostrar display calling durante 5 segundos SetTimeOut
          al passar estos 5 segundos borra l'array Phone comutar isCall a true
      ·  cuando clico colgar borrar l'array i cambiar isCall a false

Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.

# Keyboard

- Recibe:
- Estado:
- Muestra:
  ·Muestra los Key
- Acciones del Usuario:

# Key

    - Recibe:
    - Estado:
       . es activo si phone.lengh < 9  isCall-false
       · es inactivo si phone.lengh = 9  isCall-true

    - Muestra:
      · Mostrar 10 botones cada boton mostrarà un numero String (0 al 9)
      · Mostrar un boton delete

    - Acciones del Usuario:
      · Al Clicar a un numero ponerlo a l'array phone mintras phone.lenght <= 9
      · Al Clicar delete borrar un digito o todos del array phone

### DATA

- phone :array numerico de 9 digitos
- isCall : Bolean --> Calling true Colgar false
