const util ={
    enterParser(str){
        str =  str.trim();
        return str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    },

    ObjectisEmpty(obj){
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }
}
module.exports =  {
    util
}