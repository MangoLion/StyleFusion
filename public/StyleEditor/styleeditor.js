var AppForm = null;

var selectedStyle,
    selectedCategory,
    selectedSubCategory;

var currentFields = [];
//var socket = io.connect();

function styleMain()
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
        Text: 'Categories'
      },
      Controls: {
        btAddCategory: {
          Type: 'wfrButton',
          L: 5,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: 'Add'
          },
          Events: {
            OnClick: function (e) {
              var name = AppForm.tfCategoryName.Text;
              var category = {
                Text: name,
                name: name,
                subcategories: []
              };
              selectedStyle.categories.push(category);
              AppForm.listCategory.Add(category);
              AppForm.listCategory.Update();
            }
          }
        },
        btRemoveCategory: {
          Type: 'wfrButton',
          L: 57,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: 'Remove'
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
        listCategory: {
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
              selectedCategory = category;
              AppForm.listSubCategory.SetItems(category.subcategories);
              AppForm.listSubCategory.Update();
              return true;
            }
          }
        },
        tfCategoryName: {
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
        Text: 'Subcategories'
      },
      Controls: {
        btAddSubCategory: {
          Type: 'wfrButton',
          L: 5,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: 'Add',
            OnClick: function (e) {
              var name = AppForm.tfSubCategoryName.Text;
              var subcategory = {
                Text: name,
                name: name,
                fields: []
              };
              selectedCategory.subcategories.push(subcategory);
              AppForm.listSubCategory.Add(subcategory);
              AppForm.listSubCategory.Update();
            }
          }
        },
        btRemoveSubCategory: {
          Type: 'wfrButton',
          L: 57,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: 'Remove'
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
        listSubCategory: {
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

              var subcategory = e.listItem;
              selectedSubCategory = subcategory;

              SFComponents.setComponents(currentFields, AppForm.toolbarField, subcategory, StyleComponents.componentField, 'field');
              return true;
            }
          }
        },
        tfSubCategoryName: {
          Type: 'wfrEdit',
          L: 50,
          T: 43,
          W: 117,
          Data: { Text: 'Bob' }
        }
      }
    },
    wfrGroup3: {
      Type: 'wfrGroup',
      L: 540,
      T: 0,
      R: 0,
      B: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Fields'
      },
      Controls: {
        toolbarField: {
          Type: 'wfrToolBar',
          L: 0,
          T: 0,
          R: 0,
          B: 0,
          Controls: {
            btAddField: {
              Type: 'wfrButton',
              L: 17,
              T: 109,
              R: 0,
              Data: {
                HTMLEncode: true,
                Text: '➕ Add',
                TextAlign: 'left',
                OnClick: function (e) {
                  var field = {
                    name:"",
                    desc:""
                  }
                  selectedSubCategory.fields.push(field);
                  SFComponents.addComponent(currentFields, AppForm.toolbarField, field, StyleComponents.componentField, 'field');
                }
              }
            }
          }
        }
      }
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
        btAddCategory1: {
          Type: 'wfrButton',
          L: 5,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: 'Add'
          },
          Events: {
            OnClick: function (e) {
              var name = AppForm.tfStyleName.Text;
              var style = SFComponents.makeStyle(name);
              styles.push(style);
              AppForm.listStyle.Add(style);
              AppForm.listStyle.Update();
            }
          }
        },
        btRemoveCategory1: {
          Type: 'wfrButton',
          L: 57,
          T: 9,
          Data: {
            HTMLEncode: true,
            Text: 'Remove'
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
              AppForm.listCategory.SetItems(style.categories);
              AppForm.listCategory.Update();
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
