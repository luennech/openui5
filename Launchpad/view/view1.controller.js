sap.ui.controller("view.view1", {
/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf view.View1
	 *///	onInit: function() {
//
//	},
/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf view.View1
	 *///	onBeforeRendering: function() {
//
//	},
/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf view.View1
	 *///	onAfterRendering: function() {
//
//	},
/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf view.View1
	 *///	onExit: function() {
//
//	}
	/**
	*@memberOf view.view1
	*/
openShopping_App: function () {
		window.location.href = 'http://luennech.github.io/openui5/Shopping_App/index.html';
	}
});
