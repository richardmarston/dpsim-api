var searchIndex = JSON.parse('{\
"dpsim_api":{"doc":"DPSIM Service Rest API for controlling DPSim analyzer","t":[13,13,3,4,11,0,11,11,11,11,11,11,0,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,5,11,11,12,11,11,0,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,5,3,3,3,3,3,6,11,11,11,11,11,11,11,11,11,11,11,11,11,12,14,11,5,5,12,11,11,11,11,11,11,11,11,11,5,5,5,5,5,5,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,12,12,12,12,5,5,5,5,5,5,5,5,5,12,5,11,11,5,11,11,11,12,11,11,11,11,11,11,12,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["Outage","Powerflow","Simulation","SimulationType","__clone_box","amqp","borrow","borrow","borrow_mut","borrow_mut","clone","clone_into","db","default","deserialize","deserialize","error","finalize","fmt","form_multi_parameter","form_parameter","from","from","from_value","init","into","into","into_collection","into_collection","json_schema","json_schema","load_profile_data","main","mapped","mapped","model_id","push_data","push_value","routes","schema_name","schema_name","serialize","serialize","simulation_id","simulation_type","to_owned","to_string","try_from","try_from","try_into","try_into","type_id","type_id","vzip","vzip","publish","get_connection","get_new_simulation_id","read_simulation","read_u64","write_simulation","write_u64","Route","RoutesContext","SimulationError","SimulationFormStruct","SimulationFormStructJsonSchema","SimulationResult","__clone_box","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","clone","clone_into","collapse_id","create_endpoint_with_doc","default","document_link","document_link_page","err","finalize","fmt","fmt","form_multi_parameter","from","from","from","from","from","get_api","get_post_simulation","get_root","get_routes","get_simulation_id","get_simulations","heading_id","http_status_code","incomplete_form","init","into","into","into","into","into","into_collection","into_collection","into_collection","into_collection","into_collection","json_schema","json_schema","json_schema","link","load_profile_data","load_profile_data","mapped","mapped","mapped","mapped","mapped","method","model_id","model_id","name","okapi_add_operation_for_get_api_","okapi_add_operation_for_get_post_simulation_","okapi_add_operation_for_get_root_","okapi_add_operation_for_get_simulation_id_","okapi_add_operation_for_get_simulations_","okapi_add_operation_for_post_simulation_","okapi_add_operation_for_swagger_endpoint_","osstr_to_string","parse_simulation_form","path","post_simulation","push_data","push_value","read_zip","respond_to","responses","responses","routes","schema_name","schema_name","schema_name","serialize","serialize","serialize","simulation_type","simulation_type","swagger_endpoint","to_owned","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","vzip","vzip","vzip","vzip","vzip"],"q":["dpsim_api","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","dpsim_api::amqp","dpsim_api::db","","","","","","dpsim_api::routes","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","Struct for encapsulation Simulation details","Enum for the various Simulation types","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The main entry point for Rocket","","","","","","","","","","","","","","","","","","","","","","","","","Function for requesting a new Simulation id from the Redis …","Function for reading a Simulation from a Redis DB","Utility function for reading an int value from a key in a …","Function for writing a Simulation into a Redis DB","Utility function for writing an int value to a key in a …","A struct used for sharing info about a route with a …","A struct used for sharing info about some routes with a …","","Form for submitting a new Simulation","","","","","","","","","","","","","","","","","","","Create a link to the documentation page for the given …","Create an html button linking to the documentation page …","","","","","","","","","","","List the endpoints","","Redirects to /api","Returns the list of routes that we have defined","Show details for a simulation","List the simulations","","","Handler for when an incomplete form has been submitted","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a new simulation","","","Function to read a zip file","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[1,1,0,0,1,0,2,1,2,1,1,1,0,1,2,1,2,1,1,1,1,2,1,1,1,2,1,2,1,2,1,2,0,2,1,2,1,1,0,2,1,2,1,2,2,1,1,2,1,2,1,2,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,5,6,3,7,4,5,6,3,7,3,3,3,0,6,0,0,6,4,4,6,4,4,5,6,3,7,0,0,0,0,0,0,3,6,0,4,4,5,6,3,7,4,5,6,3,7,4,5,6,3,4,5,4,5,6,3,7,3,4,5,3,0,0,0,0,0,0,0,0,0,3,0,4,4,0,6,6,6,7,4,5,6,6,3,7,4,5,0,3,4,5,6,3,7,4,5,6,3,7,4,5,6,3,7,4,5,6,3,7],"f":[null,null,null,null,[[["private",3]]],null,[[]],[[]],[[]],[[]],[[],["simulationtype",4]],[[]],null,[[]],[[],["result",4]],[[],["result",4]],null,[[],[["errors",3],["result",4,["errors"]]]],[[["formatter",3]],["result",6]],[[["bool",15],["string",3],["openapigenerator",3]],[["openapierror",3],["vec",3,["parameter","global"]],["result",4,["vec","openapierror"]]]],[[["bool",15],["string",3],["openapigenerator",3]],[["parameter",3],["openapierror",3],["result",4,["parameter","openapierror"]]]],[[]],[[]],[[["valuefield",3]],[["result",4,["errors"]],["errors",3]]],[[["options",3]]],[[]],[[]],[[],["smallvec",3]],[[],["smallvec",3]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],null,[[],[["result",4,["error"]],["error",3]]],[[],["smallvec",3]],[[],["smallvec",3]],null,[[["datafield",3],["fromfieldcontext",3]],[["box",3,["future","global"]],["pin",3,["box"]]]],[[["valuefield",3]]],null,[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],null,null,[[]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[["simulation",3]]],[[],[["redisresult",6,["connection"]],["connection",3]]],[[],[["u64",15],["redisresult",6,["u64"]]]],[[["u64",15]],[["simulation",3],["rediserror",3],["result",4,["simulation","rediserror"]]]],[[["string",3]],[["redisresult",6,["u64"]],["u64",15]]],[[["simulation",3],["string",3]],[["rediserror",3],["result",4,["rediserror"]]]],[[["u64",15],["string",3]],["redisresult",6]],null,null,null,null,null,null,[[["private",3]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["route",3]],[[]],null,null,[[],["simulationerror",3]],[[["str",15]],["string",3]],[[["str",15]],["template",3]],null,[[],[["errors",3],["result",4,["errors"]]]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["bool",15],["string",3],["openapigenerator",3]],[["openapierror",3],["vec",3,["parameter","global"]],["result",4,["vec","openapierror"]]]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["vec",3,["route"]],["route",3]]],[[["u64",15]]],[[]],null,null,[[["request",3]]],[[["options",3]]],[[]],[[]],[[]],[[]],[[]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],[[["schemagenerator",3]],["schema",4]],null,null,null,[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],[[],["smallvec",3]],null,null,null,null,[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["openapigenerator",3],["string",3]],["result",6]],[[["osstr",3]],["string",3]],[[["form",3,["simulationformstruct"]],["simulationformstruct",3]]],null,[[["form",3,["simulationformstruct"]],["simulationformstruct",3]]],[[["fromformgeneratedcontext",3],["datafield",3]],[["pin",3,["box"]],["box",3,["future"]]]],[[["valuefield",3]]],[[],[["zipresult",6,["vec"]],["vec",3,["string"]]]],[[["request",3]],["result",6]],[[["openapigenerator",3]],[["result",4,["responses","openapierror"]],["responses",3],["openapierror",3]]],[[["openapigenerator",3]],[["result",4,["responses","openapierror"]],["responses",3],["openapierror",3]]],null,[[],["string",3]],[[],["string",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,null,[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]]],"p":[[4,"SimulationType"],[3,"Simulation"],[3,"Route"],[3,"SimulationFormStruct"],[3,"SimulationFormStructJsonSchema"],[3,"SimulationError"],[3,"RoutesContext"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};