angular.module('archApp')
    .service('Validator', function() {
        var Validator = {};

        Validator.checkObjectProperties = function(object, mustHaveAllProperties, allowedPropertyValuesMapping) {
            var objectMock = _.isEmpty(object) ? {} : _.cloneDeep(object);
            var failedPropertyValueMapping = {};
            var validationResult = {
                ok: false,
                message: 'Validation couldn\'t be performed'
            };

            // Perform check on object's properties, compare allowed values if provided.
            if (allowedPropertyValuesMapping) {
                _.each(allowedPropertyValuesMapping, function(value, property) {
                    if (objectMock[property] && objectMock[property] === value) {
                       delete failedPropertyValueMapping[property];
                    } else {
                        failedPropertyValueMapping[property] = objectMock[property];
                    }
                });
            } else {
                _.each(objectMock, function(value, property) {
                    if (mustHaveAllProperties && ((!value && value !== false) || value === {} || value === [])) {
                        failedPropertyValueMapping[property] = objectMock[property];
                    } else {
                        delete failedPropertyValueMapping[property];
                    }
                });
            }
            // Summary for check process.
            if (_.isEmpty(failedPropertyValueMapping)) {
                validationResult = {
                    ok: true
                };
            } else {
                validationResult.message = 'You didn\'t provide necessary info. \n';
                _.each(failedPropertyValueMapping, function(value, property) {
                    if (value) {
                        validationResult.message += 'Property named \'' + property + '\' doesn\'t have allowed value. (' + value + ').\n';
                    } else {
                        validationResult.message += 'Property named \'' + property + '\' can\'t be empty.\n';

                    }
                });
            }


            return validationResult;
        };

        return Validator;
    });