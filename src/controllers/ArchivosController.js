const ArchivosController = {}
const rutaPrincipal = __dirname + '/../tmp/'


AutenticacionController.subirArchivo = (req, res) => {
    try {
    
        //Subir Archivo

        const archivo = req.files.miArchivo;
        const rutaGuardar = rutaPrincipal + archivo.name;

        return archivo.mv( rutaGuardar, function(err) {
            if (err) {
                return res.status(500).json({error: err});
            } else {
                return res.json( { mensaje: 'El archivo se subió correctamente' } );
            }
            } );  
        } catch ( err) {
            return res.status(500).json({error: err}); 
        }
    }


module.exports = ArchivosController ;