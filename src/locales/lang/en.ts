import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'TerraMoursAdmin'
    },
    routes: {
      dashboard: {
        dashboard: 'Dashboard',
        analysis: 'Analysis',
        workbench: 'Workbench'
      },
      about: {
        about: 'About'
      }
    }
  }
};

export default locale;
