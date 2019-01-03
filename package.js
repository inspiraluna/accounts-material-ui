Package.describe({
  summary: 'Material UI Components for Useraccounts-React',
  version: '0.0.7',
  name: 'inspiraluna:useraccounts-react-material-ui',
  git: 'https://github.com/inspiraluna/accounts-material-ui.git',
  documentation: null
})

Package.onUse(api => {
  api.versionsFrom('1.6.1')

  api.use('ecmascript')
  api.mainModule('index.js', 'client')
})


Npm.depends({
    '@material-ui/core':'3.7.1',
    'typeface-roboto':'0.0.54',
    '@material-ui/icons':'3.0.1'
});