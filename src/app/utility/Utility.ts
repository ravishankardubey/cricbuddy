import { infoType } from './../config/constants';

export class Utility {
    static toast(message, type) {
        const toastDuration = 5000;
        if (type.toUpperCase() === infoType.success.toUpperCase()) {
            M.toast(message, toastDuration, 'green');
        } else if (type.toUpperCase() === infoType.info.toUpperCase()) {
            M.toast(message, toastDuration, 'teal');
        } else if (type.toUpperCase() === infoType.error.toUpperCase()) {
            M.toast(message, toastDuration, 'red');
        }
    }
}
