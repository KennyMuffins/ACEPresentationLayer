import React from 'react'
import { Route } from 'react-router-dom'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Home from './views/Home'
import Form from './views/Form'
import Event from './views/Event'
import FormImportedJson from './components/FormImportedJson'
import FormGiftEvaluationJson from './components/FormGiftEvaluationJson'
import FormBuilderComponent from './components/FormBuilderComponent'
import MyForm from './views/MyForm'
import Auth from './views/Auth/Auth'
import ProcessTemplateList from './components/ProcessTemplateList'
import ProcessInstanceList from './components/ProcessInstanceList'

import FormAdder from './components/FromAdder'
import FormAdderEdit from './components/FormAdderEdit'
import FormAdderNewform from './components/FormAdderNewform'
import FormsList from './components/FormsList'

import { AppConfig } from './config';

const App = () => (
  <div>
    <Header />

    <div className="container" id="main">
      { AppConfig.projectUrl === 'https://reactstarter.form.io' ?
        <div className="alert alert-warning">This app is still configured to use the default project. Be sure to create your own project in form.io and change the PROJECT_URL in src/config.js</div>
        : null
      }
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/myform" component={MyForm} />
      <Route path="/event" component={Event} />
      <Route path="/FormImportedJson" component={FormImportedJson} />
      <Route path="/FormBuilderComponent" component={FormBuilderComponent} />
      <Route path="/ProcessTemplateList" component={ProcessTemplateList} />
      <Route path="/ProcessInstanceList" component={ProcessInstanceList} />
      <Route path="/FormGiftEvaluationJson" component={FormGiftEvaluationJson} />
      <Route path="/FormAdder" component={FormAdder} />
      <Route path="/FormAdderEdit" component={FormAdderEdit} />
      <Route path="/FormAdderNewform" component={FormAdderNewform} />
      <Route path="/FormsList" component={FormsList} />
      <Route path="/auth" component={Auth} />
    </div>

    <Footer />
  </div>
)

export default App
