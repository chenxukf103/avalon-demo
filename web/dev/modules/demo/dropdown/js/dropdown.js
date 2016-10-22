define(["avalon"],function(avalon){
	 var vm = avalon.define({
        	$id: "dropdown",
        	value:'',
        	$opts:{ data: [
                        {
                            value: '1',
                            label: '1'
                        }, {
                            value: 2,
                            label: '2'
                        }, {
                            label: 'group1',
                            options: [
                                {
                                    value: false,
                                    label: 'false'
                                }
                            ]
                        }, {
                            label: 'group2',
                            options: [
                                {
                                    value: 'disabled',
                                    label: 'disabled',
                                    enable: false
                                }
                            ]
                        }
                    ]
                }

       });
			

	 return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function(param, rs, rj){
        }
     });
});