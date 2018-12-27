Package.describe({
  summary: 'Material UI Components for Useraccounts-React',
  version: '0.0.4',
  name: 'inspiraluna:useraccounts-react-material-ui',
  git: 'https://github.com/inspiraluna/accounts-material-ui.git',
  documentation: null
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('ecmascript')
  api.mainModule('index.js', 'client')
})
