//===============================================================
// CommandSP.js
//===============================================================
/*:
* @plugindesc  移除戰鬥基礎指令-攻擊及防禦.
* @author wentai
*
* @help 這個插件不提供插件指令.
*/

(function() {

Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {
        this.addSkillCommands();
        this.addItemCommand();
    }
};

})();
