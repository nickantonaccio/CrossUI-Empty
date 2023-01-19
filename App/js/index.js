// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group1")
                .setLeft("2.2857142857142856em")
                .setTop("3.0476190476190474em")
                .setWidth("18em")
                .setCaption("Group")
                .setToggleBtn(false)
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block7")
                .setLeft("22.857142857142858em")
                .setTop("3.8095238095238093em")
                .setPosition("relative")
                .setDisplay("inline-block")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block8")
                .setLeft("23.61904761904762em")
                .setTop("4.571428571428571em")
                .setPosition("relative")
                .setDisplay("inline-block")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block9")
                .setLeft("24.38095238095238em")
                .setTop("5.333333333333333em")
                .setPosition("relative")
                .setDisplay("inline-block")
            );
            
            append(
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block10")
                .setLeft("25.142857142857142em")
                .setTop("6.095238095238095em")
                .setPosition("relative")
                .setDisplay("inline-block")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});