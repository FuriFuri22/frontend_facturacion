import FileUpload from "../components/FileUpload";

const HomeView = () => {
    return (
      <div>
        <h1>Cargar Excel del proveedor</h1>
        <p style={{ width: '500px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
          EN ESTA SECCION PUEDES HACER CLICK EN LA BANDEJA PARA BUSCAR EL ARCHIVO O ARRASTRAR EL ARCHIVO Y SOLTARLO DENTRO DE LA BANDEJA
          </p>

        <FileUpload/>

        <p style={{ width: '500px', whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
          LUEGO DE SUBIR EL ARCHIVO SELECCIONA "VISTA DE STOCK"
        </p>
        <p>
          ⬅️ Aqui en la barra lateral
        </p>
      </div>
    );
  }
  
  export default HomeView