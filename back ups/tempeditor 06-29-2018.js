var AppForm = null;

var styles = [];
var selectedStyle,
    selectedTemplate,
    selectedComponent;

var currentFields = [];
//var socket = io.connect();

function ngMain()
{
  AppForm = new ngControls({
  /*
      ControlsForm: 'Form1',
      Width: 1360,
      Height: 768
                    */
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
                contents: []
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
              AppForm.listComponent.SetItems(category.contents);
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
                fields: []
              };
              selectedTemplate.contents.push(component);
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
              for (var i = 0; i < currentFields.length; i++) {
                var field = currentFields[i];
                AppForm['field' + field.index].Dispose();
                delete AppForm['field' + field.index];
              }
              currentFields = [];
              var addControl = {};
              for (var i = 0; i < component.fields.length; i++) {
                var field = component.fields[i];
                var fieldControl = makeField();
                fieldControl.field = field;
                addControl['field' + currentFields.length] = fieldControl;
                fieldControl.index = currentFields.length;
                currentFields.push(fieldControl);
              }
              console.log(addControl);
              AppForm.AddControls(addControl, AppForm.toolbarField);
              AppForm.toolbarField.Update();
              for (var i = 0; i < currentFields.length; i++) {
                var fieldControl = currentFields[i];
                AppForm['field' + fieldControl.index].Update();
                AppForm['field' + fieldControl.index].Controls.group.Update();
              }
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
        Page: 2,
        Text: 'Fields'
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
              Controls: {
                btAddQuestion: {
                  Type: 'wfrButton',
                  L: 0,
                  T: 1,
                  Data: {
                    HTMLEncode: true,
                    Text: '➕ Add'
                  }
                },
                frameQuestion: {
                  Type: 'wfrFrame',
                  L: -5,
                  T: 1,
                  H: 90,
                  R: 5,
                  Controls: {
                    group1: {
                      Type: 'wfrGroup',
                      L: 0,
                      T: 0,
                      R: 0,
                      B: 0,
                      Data: { HTMLEncode: true },
                      Controls: {
                        wfrLabel5: {
                          Type: 'wfrLabel',
                          L: 5,
                          T: 5,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Variable:'
                          }
                        },
                        wfrLabel6: {
                          Type: 'wfrLabel',
                          L: 220,
                          T: 5,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Question:'
                          }
                        },
                        tfVarName: {
                          Type: 'wfrEdit',
                          L: 5,
                          T: 25,
                          W: 195,
                          Data: { Text: 'tfVarName' }
                        },
                        tfQuestion: {
                          Type: 'wfrMemo',
                          L: 220,
                          T: 25,
                          R: 0,
                          B: 0,
                          Data: { Text: 'tfQuestion' }
                        },
                        btRemove: {
                          Type: 'wfrButton',
                          L: 5,
                          T: 54,
                          Data: {
                            HTMLEncode: true,
                            Text: '🗑️ Remove'
                          }
                        },
                        btMoveUp: {
                          Type: 'wfrButton',
                          L: 86,
                          T: 54,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔺'
                          }
                        },
                        btMoveDown: {
                          Type: 'wfrButton',
                          L: 125,
                          T: 54,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔻'
                          }
                        }
                      }
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
              Controls: {
                btAddInput: {
                  Type: 'wfrButton',
                  L: 15,
                  T: 8,
                  Data: {
                    HTMLEncode: true,
                    Text: '➕ Add'
                  }
                },
                frameInput: {
                  Type: 'wfrFrame',
                  L: 0,
                  T: 41,
                  H: 100,
                  R: 0,
                  Controls: {
                    groupInput: {
                      Type: 'wfrGroup',
                      L: 0,
                      T: 0,
                      H: 100,
                      R: 0,
                      Data: { HTMLEncode: true },
                      Controls: {
                        wfrLabel4: {
                          Type: 'wfrLabel',
                          L: 12,
                          T: 40,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Style Format:'
                          }
                        },
                        wfrLabel7: {
                          Type: 'wfrLabel',
                          L: 12,
                          T: 69,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Category'
                          }
                        },
                        wfrLabel8: {
                          Type: 'wfrLabel',
                          L: 12,
                          T: 11,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Variable Name:'
                          }
                        },
                        wfrLabel9: {
                          Type: 'wfrLabel',
                          L: 330,
                          T: 11,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Description:'
                          }
                        },
                        btStyle: {
                          Type: 'wfrSplitButton',
                          L: 100,
                          T: 34,
                          W: 220,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Select Style'
                          },
                          Menu: { Type: 'ngMenu' }
                        },
                        btCategory: {
                          Type: 'wfrSplitButton',
                          L: 100,
                          T: 63,
                          W: 220,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Select Category'
                          },
                          Menu1: { Type: 'ngMenu' }
                        },
                        tfVarName1: {
                          Type: 'wfrEdit',
                          L: 100,
                          T: 5,
                          W: 220,
                          Data: { Text: 'tfVarName1' }
                        },
                        tfDesc: {
                          Type: 'wfrMemo',
                          L: 412,
                          T: 5,
                          R: 5,
                          B: 5,
                          Data: { Text: 'tfDesc' }
                        },
                        btRemove: {
                          Type: 'wfrButton',
                          L: 323,
                          T: 63,
                          Data: {
                            HTMLEncode: true,
                            Text: '🗑️ Remove'
                          }
                        },
                        btMoveUp1: {
                          Type: 'wfrButton',
                          L: 322,
                          T: 34,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔺'
                          }
                        },
                        btMoveDown1: {
                          Type: 'wfrButton',
                          L: 365,
                          T: 34,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔻'
                          }
                        }
                      }
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
              Controls: {
                btAddPhrase: {
                  Type: 'wfrButton',
                  L: 15,
                  T: 8,
                  Data: {
                    HTMLEncode: true,
                    Text: '➕ Add'
                  }
                },
                framePhrase: {
                  Type: 'wfrFrame',
                  L: 0,
                  T: 41,
                  H: 114,
                  R: 0,
                  Controls: {
                    group: {
                      Type: 'wfrGroup',
                      L: 0,
                      T: 0,
                      R: 0,
                      B: 0,
                      Data: { HTMLEncode: true },
                      Controls: {
                        wfrLabel10: {
                          Type: 'wfrLabel',
                          L: 5,
                          T: 5,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Phrase Description:'
                          }
                        },
                        tfDesc1: {
                          Type: 'wfrMemo',
                          L: 120,
                          T: 0,
                          H: 30,
                          R: 5,
                          Data: { Text: 'tfDesc1' }
                        },
                        tfPhrase: {
                          Type: 'wfrMemo',
                          L: 120,
                          T: 40,
                          R: 5,
                          B: 5,
                          Data: { Text: 'tfPhrase' }
                        },
                        lbPhrase: {
                          Type: 'wfrLabel',
                          L: 67,
                          T: 60,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Phrase:'
                          }
                        },
                        btRemove: {
                          Type: 'wfrButton',
                          L: 4,
                          T: 76,
                          Data: {
                            HTMLEncode: true,
                            Text: '🗑️ Remove'
                          }
                        },
                        btMoveUp2: {
                          Type: 'wfrButton',
                          L: 5,
                          T: 28,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔺'
                          }
                        },
                        btMoveDown2: {
                          Type: 'wfrButton',
                          L: 46,
                          T: 28,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔻'
                          }
                        }
                      }
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
              var style = {
                Text: name,
                name: name,
                templates: []
              };
              styles.push(style);
              AppForm.listStyle.Add(style);
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
      }
    }
  });
  AppForm.Update();

}


makeField = function(){return {
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
                      Data: { Text: 'tfName' }
                    },
                    wfrMemo1: {
                      Type: 'wfrMemo',
                      L: 314,
                      T: 21,
                      R: 0,
                      B: 5,
                      Data: { Text: 'wfrMemo1' }
                    },
                    btRemoveField: {
                      Type: 'wfrButton',
                      L: 14,
                      T: 60,
                      Data: {
                        HTMLEncode: true,
                        Text: 'Remove Field'
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
