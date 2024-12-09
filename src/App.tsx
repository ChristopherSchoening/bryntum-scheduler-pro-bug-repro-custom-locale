import { LocaleHelper, LocaleManager } from '@bryntum/schedulerpro'
import { BryntumSchedulerPro } from '@bryntum/schedulerpro-react'
import './App.scss'

LocaleHelper.publishLocale('de', {
  desc: 'Deutsch',
  locale: {
    localeName: 'De',
    localeDesc: 'Deutsch',
  },
})
LocaleManager.locale = 'De'

export const App = () => <BryntumSchedulerPro></BryntumSchedulerPro>
