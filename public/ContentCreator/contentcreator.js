var AppForm = null;
var currentContent,
    currentComponents = [],

contents = [];

function contentMain() {
    if (AppForm)
        AppForm.Dispose();
    // Start coding right here
    AppForm = new ngControls({
        /* ControlsForm: 'a' */
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
                    SFUtilities.downloadObjectAsJson(styles, 'Session');
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
                OnClick: function (e) {
                    AppForm.windowUpload.Show();
                }
            }
        },
        group: {
            Type: 'wfrGroup',
            L: 210,
            T: 60,
            R: 185,
            B: 0,
            Data: {
                HTMLEncode: true
            },
            Controls: {
                toolbarContent: {
                    Type: 'wfrToolBar',
                    L: 0,
                    T: 0,
                    R: 0,
                    B: 0,
                    Controls: {}
                }
            }
        },
        groupAddComponent: {
            Type: 'wfrGroup',
            L: 0,
            T: 140,
            W: 160,
            H: 180,
            Data: {
                HTMLEncode: true
            },
            Controls: {
                wfrLabel1: {
                    Type: 'wfrLabel',
                    L: 6,
                    T: 0,
                    Data: {
                        HTMLEncode: true,
                        Text: 'Style Format:'
                    }
                },
                wfrLabel2: {
                    Type: 'wfrLabel',
                    L: 6,
                    T: 48,
                    Data: {
                        HTMLEncode: true,
                        Text: 'Template'
                    }
                },
                wfrLabel3: {
                    Type: 'wfrLabel',
                    L: 6,
                    T: 97,
                    Data: {
                        HTMLEncode: true,
                        Text: 'Component:'
                    }
                },
                btAddComponent: {
                    Type: 'wfrButton',
                    L: 25,
                    T: 147,
                    Data: {
                        HTMLEncode: true,
                        Text: 'Add Component'
                    },
                    Events: {
                      OnClick: function(e){
                        currentContent.components.push({});
                      }
                    }
                },
                btStyle: {
                    Type: 'wfrSplitButton',
                    L: 0,
                    T: 17,
                    R: 0,
                    Data: {
                        HTMLEncode: true,
                        Text: 'btStyle'
                    },
                    Menu: {
                        Type: 'ngMenu'
                    }
                },
                btTemplate: {
                    Type: 'wfrSplitButton',
                    L: 0,
                    T: 63,
                    R: 0,
                    Data: {
                        HTMLEncode: true,
                        Text: 'btTemplate'
                    },
                    Menu: {
                        Type: 'ngMenu'
                    }
                },
                btComponent: {
                    Type: 'wfrSplitButton',
                    L: 0,
                    T: 112,
                    R: 0,
                    Data: {
                        HTMLEncode: true,
                        Text: 'btComponent'
                    },
                    Menu: {
                        Type: 'ngMenu'
                    }
                }
            }
        },
        groupTabs: {
            Type: 'wfrGroup',
            L: 0,
            T: 27,
            H: 33,
            R: 0,
            Data: {
                HTMLEncode: true
            },
            Controls: {
                toolbarTabs: {
                    Type: 'wfrToolBar',
                    L: 0,
                    T: 0,
                    R: 0,
                    Controls: {
                        btAddContent: {
                            Type: 'wfrButton',
                            L: 0,
                            T: 0,
                            Data: {
                                HTMLEncode: true,
                                Text: 'Add Content'
                            },
                            Events: {
                              OnClick: function(e){
                                ngMessageDlg('wfrDlgInputBox', 'Enter Content Name:', 'wfrDlgInputBox', function (c) {
                                    if (c.DialogResult == mbOK) {
                                        c.Hide();
                                        var name = c.Controls.Edit.GetText();
                                        if (AppForm['btContent'+name]){
                                          ngMessageDlg('wfrDlgMessageBox','Name already exists!','wfrDlgMessageBox', function(c) { return true; }, { DlgIcon: 'EyeIcon' });
                                          return false;
                                        }

                                        var content = ContentComponents.objectContent(name);
                                        contents.push(content);

                                        var obj = {};
                                        obj['btContent' + name] = {
                                            Type: 'wfrButton',
                                            Data: {
                                              HTMLEncode: true,
                                              Text: name,
                                              content: content
                                            },
                                            Events: {
                                              OnClick: function(e){
                                                currentContent = e.btn.content;
                                                SFComponents.setComponents(currentComponents, AppForm.toolbarContent, e.btn.content, ContentComponents.componentComponent, 'component');
                                              }
                                            }
                                          };

                                        AppForm.AddControls(obj,AppForm.toolbarTabs);
                                        AppForm.toolbarTabs.CtrlInsertBefore(AppForm['btContent' + name], AppForm.btAddContent);
                                        AppForm['btContent' + name].Update();
                                        AppForm.toolbarTabs.Update();
                                    }
                                    return true;
                                });
                              }
                            }
                        }
                    }
                }
            }
        },
    windowPhrase: {
    Type: 'wfrWindow',
    L: 200,
    T: 60,
    W: 360,
    H: 480,
    CloseBtn: true,
    MaxBtn: true,
    Data: {
      DisposeOnClose: true,
      HTMLEncode: true,
      Text: 'windowPhrase',
      Visible: false
    },
    Controls: {
      toolbarPhrase: {
        Type: 'wfrToolBar',
        L: 0,
        T: 0,
        R: 0,
        B: 27,
        Controls: {
          pagesInput: {
            Type: 'wePages',
            L: 0,
            T: 0,
            R: 0,
            B: 0,
            Data: {
              HTMLEncode: true,
              Page: 0
            },
            Pages: [
              {
                Text: 'Inputs & Questions',
                Controls: {
                  toolbarInput: {
                    Type: 'wfrToolBar',
                    L: 0,
                    T: 0,
                    R: 0,
                    B: 0
                  }
                }
              },
              {
                Text: 'Output',
                Controls: {
                  toolbarOutput: {
                    Type: 'wfrToolBar',
                    L: 0,
                    T: 0,
                    R: 0,
                    B: 0
                  }
                }
              }
            ]
          }
        }
      },
      btAtpply: {
        Type: 'wfrButton',
        L: 104,
        B: 0,
        Data: {
          HTMLEncode: true,
          Text: '✔️Apply'
        }
      },
      btCancel: {
        Type: 'wfrButton',
        L: 172,
        B: 0,
        Data: {
          HTMLEncode: true,
          Text: '❌Cancel'
        }
      }
    }
  }
    });
    AppForm.Update();
}
