var searchIndex={};
searchIndex["tobj"] = {"doc":"Tiny OBJ loader, inspired by Syoyo's excellent…","i":[[3,"Mesh","tobj","A mesh made up of triangles loaded from some OBJ file",null,null],[12,"positions","","Flattened 3 component floating point vectors, storing…",0,null],[12,"normals","","Flattened 3 component floating point vectors, storing…",0,null],[12,"texcoords","","Flattened 2 component floating point vectors, storing…",0,null],[12,"indices","","Indices for vertices of each triangle. If loaded with…",0,null],[12,"num_face_indices","","The number of vertices used by each face. When using…",0,null],[12,"material_id","","Optional material id associated with this mesh. The…",0,null],[3,"Model","","A named model within the file, associates some mesh with a…",null,null],[12,"mesh","","Mesh used by the model containing its geometry",1,null],[12,"name","","Name assigned to this mesh",1,null],[3,"Material","","A material that may be referenced by one or more meshes.…",null,null],[12,"name","","Material name as specified in the MTL file",2,null],[12,"ambient","","Ambient color of the material",2,null],[12,"diffuse","","Diffuse color of the material",2,null],[12,"specular","","Specular color of the material",2,null],[12,"shininess","","Material shininess attribute",2,null],[12,"dissolve","","Dissolve attribute is the alpha term for the material.…",2,null],[12,"optical_density","","Optical density also known as index of refraction. Called…",2,null],[12,"ambient_texture","","Name of the ambient texture file for the material. No path…",2,null],[12,"diffuse_texture","","Name of the diffuse texture file for the material. No path…",2,null],[12,"specular_texture","","Name of the specular texture file for the material. No…",2,null],[12,"normal_texture","","Name of the normal map texture file for the material. No…",2,null],[12,"shininess_texture","","Name of the shininess map texture file for the material.…",2,null],[12,"dissolve_texture","","Name of the alpha map texture file for the material. No…",2,null],[12,"illumination_model","","The illumnination model to use for this material. The…",2,null],[12,"unknown_param","","Key value pairs of any unrecognized parameters encountered…",2,null],[4,"LoadError","","Possible errors that may occur while loading OBJ and MTL…",null,null],[13,"OpenFileFailed","","",3,null],[13,"ReadError","","",3,null],[13,"UnrecognizedCharacter","","",3,null],[13,"PositionParseError","","",3,null],[13,"NormalParseError","","",3,null],[13,"TexcoordParseError","","",3,null],[13,"FaceParseError","","",3,null],[13,"MaterialParseError","","",3,null],[13,"InvalidObjectName","","",3,null],[13,"FaceVertexOutOfBounds","","",3,null],[13,"FaceTexCoordOutOfBounds","","",3,null],[13,"FaceNormalOutOfBounds","","",3,null],[13,"GenericFailure","","",3,null],[5,"load_obj","","Load the various objects specified in the OBJ file and any…",null,[[["bool"],["p"]],["loadresult"]]],[5,"load_mtl","","Load the materials defined in a MTL file Returns a pair…",null,[[["p"]],["mtlloadresult"]]],[5,"load_obj_buf","","Load the various meshes in an OBJ buffer of some kind,…",null,[[["ml"],["b"],["bool"]],["loadresult"]]],[5,"load_mtl_buf","","Load the various materials in a MTL buffer",null,[[["b"]],["mtlloadresult"]]],[6,"LoadResult","","`LoadResult` is a result containing all the models loaded…",null,null],[6,"MTLLoadResult","","`MTLLoadResult` is a result containing all the materials…",null,null],[11,"empty","","Create a new empty mesh",0,[[],["mesh"]]],[11,"new","","Create a new model, associating a name with a mesh",1,[[["string"],["mesh"]],["model"]]],[11,"empty","","",2,[[],["material"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,[[["self"],["t"]]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"try_into","","",0,[[],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,[[["self"],["t"]]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"try_into","","",1,[[],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"type_id","","",1,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,[[["self"],["t"]]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"try_into","","",2,[[],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"type_id","","",2,[[["self"]],["typeid"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,[[["self"],["t"]]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"try_into","","",3,[[],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"type_id","","",3,[[["self"]],["typeid"]]],[11,"clone","","",0,[[["self"]],["mesh"]]],[11,"clone","","",1,[[["self"]],["model"]]],[11,"clone","","",2,[[["self"]],["material"]]],[11,"clone","","",3,[[["self"]],["loaderror"]]],[11,"eq","","",3,[[["self"],["loaderror"]],["bool"]]],[11,"fmt","","",0,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",1,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",2,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],["result"]]],[11,"fmt","","",3,[[["formatter"],["self"]],[["result",["error"]],["error"]]]]],"p":[[3,"Mesh"],[3,"Model"],[3,"Material"],[4,"LoadError"]]};
addSearchOptions(searchIndex);initSearch(searchIndex);