var AppForm = null;

var selectedStyle,
    selectedTemplate,
    selectedComponent;

var currentQuestions = [],
    currentInputs = [],
    currentPhrases = [];
//var socket = io.connect();

function templateMain()
{
  if (AppForm)
    AppForm.Dispose();

  AppForm = new ngControls({
  /*
      ControlsForm: 'Form1',
      Width: 1360,
      Height: 768
                    */
      windowUpload: SFComponents.makeWindowUpload(),
    wfrGroup1: {
      Type: 'wfrGroup',
      L: 180,
      T: 40,
      W: 180,
      B: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Templates'
      },
      Controls: {
        btAddTemplate: {
          Type: 'wfrButton',
          L: 5,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: '➕ Add'
          },
          Events: {
            OnClick: function (e) {
              var name = AppForm.tfTemplateName.Text;
              var category = {
                Text: name,
                name: name,
                components: []
              };
              selectedStyle.templates.push(category);
              AppForm.listTemplate.Add(category);
              AppForm.listTemplate.Update();
            }
          }
        },
        btRemoveTemplate: {
          Type: 'wfrButton',
          L: 77,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: '🗑️ Remove'
          }
        },
        wfrLabel1: {
          Type: 'wfrLabel',
          L: 5,
          T: 49,
          Data: {
            HTMLEncode: true,
            Text: 'Name: '
          }
        },
        listTemplate: {
          Type: 'wfrList',
          L: 0,
          T: 75,
          R: 0,
          B: 0,
          Data: {
            HTMLEncode: true,
            Items: [],
            SelectType: nglSelectSingle
          },
          Events: {
            OnClickItem: function (e) {
              console.log(e);
              var category = e.listItem;
              selectedTemplate = category;
              AppForm.listComponent.SetItems(category.components);
              AppForm.listComponent.Update();
              return true;
            }
          }
        },
        tfTemplateName: {
          Type: 'wfrEdit',
          L: 50,
          T: 43,
          W: 117,
          Data: { Text: 'Bob' }
        }
      }
    },
    wfrGroup2: {
      Type: 'wfrGroup',
      L: 360,
      T: 40,
      W: 180,
      B: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Components'
      },
      Controls: {
        btAddComponent: {
          Type: 'wfrButton',
          L: 5,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: '➕ Add',
            OnClick: function (e) {
              var name = AppForm.tfComponentName.Text;
              var component = {
                Text: name,
                name: name,
                questions: [],
                inputs: [],
                phrases: []
              };
              selectedTemplate.components.push(component);
              AppForm.listComponent.Add(component);
              AppForm.listComponent.Update();
            }
          }
        },
        btRemoveComponent: {
          Type: 'wfrButton',
          L: 77,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: '🗑️ Remove'
          }
        },
        wfrLabel3: {
          Type: 'wfrLabel',
          L: 5,
          T: 49,
          Data: {
            HTMLEncode: true,
            Text: 'Name: '
          }
        },
        listComponent: {
          Type: 'wfrList',
          L: 0,
          T: 75,
          R: 0,
          B: 0,
          Data: {
            HTMLEncode: true,
            Items: [],
            SelectType: nglSelectSingle
          },
          Events: {
            OnClickItem: function (e) {
              var component = e.listItem;
              selectedComponent = component;
              SFComponents.setComponents(currentQuestions, AppForm.toolbarQuestion, component, TemplateComponents.componentQuestion, 'question');
              SFComponents.setComponents(currentInputs, AppForm.toolbarInput, component, TemplateComponents.componentInput, 'input');
              SFComponents.setComponents(currentPhrases, AppForm.toolbarPhrase, component, TemplateComponents.componentPhrase, 'phrase');
              /*
                                for (var i = 0; i < currentQuestions.length; i++) {
                                  var field = currentQuestions[i];
                                  AppForm['field' + field.index].Dispose();
                                  delete AppForm['field' + field.index];
                                }

                                while (currentQuestions.length) { currentQuestions.pop(); }

                                var addControl = {};
                                for (var i = 0; i < component.currentQuestions.length; i++) {
                                  var field = component.currentQuestions[i];
                                  var fieldControl = makeField();
                                  fieldControl.field = field;
                                  addControl['field' + currentQuestions.length] = fieldControl;
                                  fieldControl.index = currentQuestions.length;
                                  currentQuestions.push(fieldControl);
                                }

                                AppForm.AddControls(addControl, AppForm.toolbarQuestion);
                                AppForm.toolbarQuestion.Update();
                                for (var i = 0; i < currentQuestions.length; i++) {
                                  var fieldControl = currentQuestions[i];
                                  AppForm['field' + fieldControl.index].Update();
                                  AppForm['field' + fieldControl.index].Controls.group.Update();
                                }*/
              return true;
            }
          }
        },
        tfComponentName: {
          Type: 'wfrEdit',
          L: 50,
          T: 43,
          W: 117,
          Data: { Text: 'Bob' }
        }
      }
    },
    wfrGroup3: {
      Type: 'wfrPages',
      L: 540,
      T: 0,
      R: 0,
      B: 0,
      Data: {
        HTMLEncode: true,
        Page: 0,
        Text: 'currentQuestions'
      },
      Pages: [
        {
          Text: 'Questions',
          Controls: {
            toolbarQuestion: {
              Type: 'wfrToolBar',
              L: 0,
              T: 0,
              R: 0,
              B: 0,
              Data: { ScrollBars: ssAuto },
              Controls: {
                btAddQuestion: {
                  Type: 'wfrButton',
                  L: 0,
                  T: 1,
                  R: 0,
                  Data: {
                    HTMLEncode: true,
                    Text: '➕ Add',
                    TextAlign: 'left',
                    OnClick: function (e) {
                      var question = {
                        varName: '',
                        text: ''
                      };
                      selectedComponent.questions.push(question);
                      SFComponents.addComponent(currentQuestions, AppForm.toolbarQuestion, question, TemplateComponents.componentQuestion, 'question');
                    }
                  }
                }
              }
            }
          }
        },
        {
          Text: 'Inputs',
          Controls: {
            toolbarInput: {
              Type: 'wfrToolBar',
              L: 0,
              T: 0,
              R: 0,
              B: 0,
              Data: { ScrollBars: ssAuto },
              Controls: {
                btAddInput: {
                  Type: 'wfrButton',
                  L: 0,
                  T: 8,
                  R: 0,
                  Data: {
                    HTMLEncode: true,
                    Text: '➕ Add',
                    TextAlign: 'left',
                    OnClick: function (e) {
                      var input = {
                        styleFormat: '',
                        category: '',
                        varName: ''
                      };
                      selectedComponent.inputs.push(input);
                      SFComponents.addComponent(currentInputs, AppForm.toolbarInput, input, TemplateComponents.componentInput, 'input');
                    }
                  }
                }
              }
            }
          }
        },
        {
          Text: 'Phrases',
          Controls: {
            toolbarPhrase: {
              Type: 'wfrToolBar',
              L: 0,
              T: 0,
              R: 0,
              B: 0,
              Data: { ScrollBars: ssAuto },
              Controls: {
                btAddPhrase: {
                  Type: 'wfrButton',
                  L: 0,
                  T: 8,
                  R: 0,
                  Data: {
                    HTMLEncode: true,
                    Text: '➕ Add',
                    TextAlign: 'left',
                    OnClick: function (e) {
                      var phrase = {
                        desc: '',
                        phrase: ''
                      };
                      selectedComponent.phrases.push(phrase);
                      SFComponents.addComponent(currentPhrases, AppForm.toolbarPhrase, phrase, TemplateComponents.componentPhrase, 'phrase');
                    }
                  }
                }
              }
            }
          }
        }
      ]
    },
    btHome: {
      Type: 'wfrButton',
      L: -4,
      T: 0,
      Data: {
        HTMLEncode: true,
        Text: '🏠 Style Fusion'
      },
      Events: {
        OnClick: function (e) {
          ngMain();
        }
      }
    },
    btAbout: {
      Type: 'wfrButton',
      L: 260,
      T: 0,
      Data: {
        HTMLEncode: true,
        Text: '⚠ About'
      }
    },
    btHelp: {
      Type: 'wfrButton',
      L: 328,
      T: 0,
      Data: {
        HTMLEncode: true,
        Text: '❓ Help'
      }
    },
    btUpload: {
      Type: 'wfrButton',
      L: 190,
      T: 0,
      Data: {
        HTMLEncode: true,
        Text: '📁 Upload'
      },
      Events: {
        OnClick: function(e){
          AppForm.windowUpload.Show();
        }
      }
    },
    wfrGroup4: {
      Type: 'wfrGroup',
      L: 0,
      T: 40,
      W: 180,
      B: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Style Format'
      },
      Controls: {
        btAddStyle: {
          Type: 'wfrButton',
          L: 5,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: '➕ Add'
          },
          Events: {
            OnClick: function (e) {
              var name = AppForm.tfStyleName.Text;
              var style = SFComponents.makeStyle(name);
              styles.push(style);
              AppForm.listStyle.SetItems(styles);
              AppForm.listStyle.Update();
            }
          }
        },
        btRemoveStyle: {
          Type: 'wfrButton',
          L: 77,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: '🗑️ Remove'
          }
        },
        wfrLabel2: {
          Type: 'wfrLabel',
          L: 5,
          T: 49,
          Data: {
            HTMLEncode: true,
            Text: 'Name: '
          }
        },
        listStyle: {
          Type: 'wfrList',
          L: 0,
          T: 75,
          R: 0,
          B: 0,
          OnCreated: function (c, refs, options) {
            c.SetItems(styles);
            c.Update();
          },
          Data: {
            HTMLEncode: true,
            Items: [],
            SelectType: nglSelectSingle
          },
          Events: {
            OnClickItem: function (e) {
              console.log(e);
              var style = e.listItem;
              selectedStyle = style;
              AppForm.listTemplate.SetItems(style.templates);
              AppForm.listTemplate.Update();
              return true;
            }
          }
        },
        tfStyleName: {
          Type: 'wfrEdit',
          L: 50,
          T: 43,
          W: 117,
          Data: { Text: 'Bob' }
        }
      }
    },
    btDownload: {
      Type: 'wfrButton',
      L: 100,
      T: 0,
      Data: {
        HTMLEncode: true,
        Text: '💾 Download'
      },
      Events: {
        OnClick: function (e) {
          SFUtilities.downloadObjectAsJson(styles, "Session");
        }
      }
    }
  });
  AppForm.Update();


}


makeField = function(ref, array){return {
              Type: 'wfrFrame',
              L: 0,
              T: 0,
              H: 101,
              R: 0,
              Data: { HTMLEncode: true },
              Controls: {
            group: {
              Type: 'wfrGroup',
              L: 0,
              T: 0,
              B: 0,
              R: 0,
              Data: { HTMLEncode: true },
              Controls: {
                    wfrLabel4: {
                      Type: 'wfrLabel',
                      L: 14,
                      T: 6,
                      Data: {
                        HTMLEncode: true,
                        Text: 'Field Name:'
                      }
                    },
                    wfrLabel5: {
                      Type: 'wfrLabel',
                      L: 314,
                      T: 6,
                      Data: {
                        HTMLEncode: true,
                        Text: 'Field Description:'
                      }
                    },
                    tfName: {
                      Type: 'wfrEdit',
                      L: 14,
                      T: 26,
                      W: 280,
                      Data: { Text: 'tfName',
                              ref:ref }
                    },
                    wfrMemo1: {
                      Type: 'wfrMemo',
                      L: 314,
                      T: 21,
                      R: 0,
                      B: 5,
                      Data: { Text: 'wfrMemo1',
                              ref:ref }
                    },
                    btRemoveField: {
                      Type: 'wfrButton',
                      L: 14,
                      T: 60,
                      Data: {
                        HTMLEncode: true,
                        Text: 'Remove Field',
                                ref:ref
                      }
                    },
                    btMoveUp: {
                      Type: 'wfrButton',
                      L: 114,
                      T: 60,
                      Data: {
                        HTMLEncode: true,
                        Text: 'Move Up'
                      }
                    },
                    btMoveDown: {
                      Type: 'wfrButton',
                      L: 193,
                      T: 60,
                      Data: {
                        HTMLEncode: true,
                        Text: 'Move Down'
                      }
                    }
              }
            }
              }
            }
          }
