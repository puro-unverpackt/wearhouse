import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    icon: {
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            dark: {
                primary: colors.pink,
                // secondary: not set (dark),
                // background: not set (dark),
                text: {
                    content: colors.amber.lighten5,
                    header: colors.grey.darken4
                },

                accent: colors.green.lighten4,

                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            },
            light: {
                primary: colors.pink,
                secondary: colors.pink,
                background: colors.amber.lighten5,
                text: {
                    content: colors.grey.darken4,
                    header: colors.grey.darken4
                },

                accent: colors.green.darken4,

                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
            }
        }
    }
});
