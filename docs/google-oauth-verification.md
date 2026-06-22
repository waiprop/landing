# Verificación OAuth de Google para Waichatt

Este documento es la fuente de verdad para configurar y volver a verificar las integraciones de Google de Waichatt.

## Identidad obligatoria

- Nombre de la aplicación: `Waichatt`
- Nombre del proyecto de Google Cloud: `Waichatt`
- Marca y texto visible en la web: `Waichatt`
- Correo de soporte: `equipo@waichatt.com`
- Logo OAuth: isotipo propio de Waichatt, cuadrado y sin marcas de Google

No usar variantes, sufijos ni nombres alternativos en el consentimiento OAuth. El nombre de la aplicación debe coincidir literalmente con el nombre visible en la página principal: `Waichatt`.

## URLs de producción

- Página principal: `https://waichatt.com/`
- Política de privacidad: `https://waichatt.com/politica-de-privacidad/`
- Términos y condiciones: `https://waichatt.com/terminos-y-condiciones/`

Estas mismas URLs, sin redirecciones ni variantes, deben cargarse en Google Auth Platform > Información de la marca.

## Dominios

- Registrar `waichatt.com` como dominio autorizado.
- Registrar también `waichatt.app` si se utiliza en orígenes JavaScript, callbacks o redirect URIs.
- Verificar la propiedad de cada dominio en Google Search Console con una cuenta que sea propietaria o editora del proyecto de Google Cloud.
- Usar HTTPS y redirect URIs exactas; no registrar dominios que Waichatt no pueda verificar.

## Datos y función declarada

La integración opcional con Google Calendar permite sincronizar las visitas y citas gestionadas en Waichatt. La web y la política de privacidad declaran que Waichatt:

- identifica la cuenta conectada mediante nombre, correo y foto de perfil;
- lee, crea y actualiza eventos del calendario que el usuario elige conectar;
- utiliza esos datos solamente para ofrecer y mejorar la sincronización de agenda;
- no vende los datos, no los usa para publicidad y no los usa para entrenar modelos de IA generalizados;
- permite revocar la conexión desde Waichatt o desde la cuenta de Google.

Si cambia la implementación, deben actualizarse la web, la política de privacidad, el consentimiento dentro de la aplicación y la solicitud de verificación antes de pedir nuevos permisos.

## Scopes

Solicitar solo scopes utilizados por funciones ya implementadas. No agregar permisos para funciones futuras.

Scopes de identidad habituales:

- `openid`
- `email`
- `profile`

Para Calendar se debe confirmar el flujo real antes de elegir:

- `https://www.googleapis.com/auth/calendar.events`: si Waichatt necesita leer y editar eventos de calendarios que el usuario elige conectar.
- `https://www.googleapis.com/auth/calendar.events.owned`: preferirlo si alcanza con calendarios propiedad del usuario.
- `https://www.googleapis.com/auth/calendar.app.created`: preferirlo si Waichatt crea y administra un calendario secundario propio para sus eventos.
- `https://www.googleapis.com/auth/calendar.calendarlist.readonly`: solo si la interfaz necesita listar los calendarios disponibles para que el usuario elija uno.

Evitar `https://www.googleapis.com/auth/calendar` salvo que una función implementada requiera administrar calendarios completos y no pueda resolverse con un scope más acotado.

Los scopes usados por el código, configurados en el consentimiento y declarados en la solicitud de verificación deben coincidir exactamente.

## Antes de reenviar a verificación

- Confirmar que la versión publicada de la web contiene la sección "Google Calendar en Waichatt".
- Confirmar que la política de privacidad publicada contiene "Servicios de Google y Política de Uso Limitado".
- Probar el flujo completo con un usuario de prueba: conectar, sincronizar, desconectar y revocar.
- Mostrar dentro de Waichatt, antes de conectar, qué datos se solicitan y para qué se usan.
- Preparar un video de demostración que muestre la pantalla OAuth, cada permiso solicitado y la función que lo utiliza.
- Mantener separados los proyectos y credenciales de desarrollo/pruebas y de producción.
- Reenviar la verificación solo después de corregir todos los hallazgos abiertos.

## Referencias oficiales

- [Requisitos de verificación](https://support.google.com/cloud/answer/13464321)
- [Identidad y marca de la aplicación](https://support.google.com/cloud/answer/13804963)
- [Configuración de la marca OAuth](https://support.google.com/cloud/answer/15549049)
- [Política de privacidad de la aplicación](https://support.google.com/cloud/answer/13806988)
- [Scopes de Google Calendar](https://developers.google.com/workspace/calendar/api/auth)
- [Política de datos de usuario de servicios API de Google](https://developers.google.com/terms/api-services-user-data-policy)
