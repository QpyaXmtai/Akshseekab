/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
*/

function successfullMessage(msg) {
    return "≛  *W͎A͎ T͎O͎O͎L ͎ K͎I͎T͎ B͎O͎T͎*  ≛:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🚀 ≛  *W͎A͎ T͎O͎O͎L ͎ K͎I͎T͎ B͎O͎T͎*  ≛:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "🤖 ≛  *W͎A͎ T͎O͎O͎L ͎ K͎I͎T͎ B͎O͎T͎*  ≛:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
