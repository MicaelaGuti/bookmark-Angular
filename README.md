# Entrega seminario angular 2022
Entrega conta de un servicio de lectura de libros online. 
La idea es que uno pueda elegir un libro que le guste leer y agregarlo a la biblioteca, donde estarian todos los libros que se esten leyendo. 

#### Ruteo (dos secciones como mínimo)
    Las dos secciones que estan ruteadas son la principal (Home) y la seccion de comunidad.
#### Componentes (al menos una pagina con 2 componentes)
    La entrega posee un componente padre (bookmark-home), que contine dos componetes dentro que son: book-list (la lista de libros) y library-list (que contiene a la biblioteca). Ademas de un tercer componente llamado community, que es la seccion de comunidad.
#### Interfaces (datos tipados)
    En el trabajo ahy dos tipos de interfas: La primera llamada Book (que se encuentra en el archivo Book.ts en la carpeta de books-list). La segunda directiva es Group (que se encuentra en el archivo Group.ts de la carpeta community).
#### Directivas (usar ng-for y alguna de ng-if o ng-class)
    El ng-for se usa en dos ocasiones: para listar los libros que se encuentran el el home, y para listar los grupos en el componente de community.
    ng-if, se utiliza para agregar el badge de "Nuevo" a aquellos libros que tengan la condicion new:true.
#### Comunicación entre componentes (una de las dos formas al menos)
    Los componentes que se comunican son: books-list y library-list, estos se comunican a traves del servicio book-library.service (book-library.service.ts)
#### Servicios (tener un servicio al menos, ya sea para comunicar componentes, consumir una API o tener lógica de negocio aislada)
    En total hay dos servicios, uno para comunucar los componentes anteriormente mencionados (book-library.service) y otro para consumir una API creada desde mockapi.io que trae la lista de libros (book-data.service).


```
Nota: 
    Los botones de "Seguir leyendo" y "Unete al grupo" no tienen ninguna funcionalidad, simplemente estan para que se de a enteder el consepto de para que sirvirian 

```


