function main() {
    'use strict';

    var kitchenLight =
        document.getElementById('kitchenLight');
    var iconKitchenLight =
        document.getElementById('iconKitchenLight');
    var classesIconKitchenLight =
        iconKitchenLight.classList;

    kitchenLight.onclick = function() {
        if (classesIconKitchenLight.contains('fa-toggle-off')) {
            classesIconKitchenLight.remove('fa-toggle-off');
            classesIconKitchenLight.add('fa-toggle-on');   
        } else {
            classesIconKitchenLight.remove('fa-toggle-on');
            classesIconKitchenLight.add('fa-toggle-off');
        }
    };
};

main();