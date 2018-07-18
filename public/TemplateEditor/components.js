

var componentQuestion = function(ref, array){ return{
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
                          OnCreated: function (c, refs, options) {
                            c.SetText(ref.varName);
                          },
                          Data: { Text: 'tfVarName',
                                  array: array,
                                  ref:ref },
                          Events: {
                            OnTextChanged: function (c) {
                              ref.varName = c.Text;
                            }
                          }
                        },
                        tfQuestion: {
                          Type: 'wfrMemo',
                          L: 220,
                          T: 25,
                          R: 0,
                          B: 0,
                          OnCreated: function (c, refs, options) {
                            c.SetText(ref.text);
                          },
                          Data: { Text: 'tfQuestion',
                                  array: array,
                                  ref:ref },
                          Events: {
                            OnTextChanged: function (c) {
                              ref.text = c.Text;
                            }
                          }
                        },
                        btRemove: {
                          Type: 'wfrButton',
                          L: 5,
                          T: 54,
                          Data: {
                            HTMLEncode: true,
                            Text: '🗑️ Remove',
                            array: array,
                            ref:ref
                          }
                        },
                        btMoveUp: {
                          Type: 'wfrButton',
                          L: 86,
                          T: 54,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔺',
                            array: array,
                            ref:ref
                          }
                        },
                        btMoveDown: {
                          Type: 'wfrButton',
                          L: 125,
                          T: 54,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔻',
                            array: array,
                            ref:ref
                          }
                        }
                      }
                    }
                  }
                }
              }
var componentPhrase = function(ref, array){return {
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
                        tfDesc: {
                          Type: 'wfrMemo',
                          L: 120,
                          T: 0,
                          H: 30,
                          R: 5,
                          OnCreated: function (c, refs, options) {
                            c.SetText(ref.desc);
                          },
                          Data: { Text: 'tfDesc1',
                                  array: array,
                                  ref:ref },
                          Events: {
                            OnTextChanged: function (c) {
                              ref.desc = c.Text;
                            }
                          }
                        },
                        tfPhrase: {
                          Type: 'wfrMemo',
                          L: 120,
                          T: 40,
                          R: 5,
                          B: 5,
                          OnCreated: function (c, refs, options) {
                            c.SetText(ref.phrase);
                          },
                          Data: { Text: 'tfPhrase',
                                  array: array,
                                  ref:ref },
                          Events: {
                            OnTextChanged: function (c) {
                              ref.phrase = c.Text;
                            }
                          }
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
                            Text: '🗑️ Remove',
                            array: array,
                            ref:ref
                          }
                        },
                        btMoveUp: {
                          Type: 'wfrButton',
                          L: 5,
                          T: 28,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔺',
                            array: array,
                            ref:ref
                          }
                        },
                        btMoveDown: {
                          Type: 'wfrButton',
                          L: 46,
                          T: 28,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔻',
                            array: array,
                            ref:ref
                          }
                        }
                      }
                    }
                  }
                }
              }

var componentInput = function(ref, array){return {
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
                          Menu: { Type: 'ngMenu',
                                  array: array,
                                  ref:ref}
                        },
                        btCategory: {
                          Type: 'wfrSplitButton',
                          L: 100,
                          T: 63,
                          W: 220,
                          Data: {
                            HTMLEncode: true,
                            Text: 'Select Category',
                                    array: array,
                                    ref:ref
                          },
                          Menu1: { Type: 'ngMenu' }
                        },
                        tfVarName: {
                          Type: 'wfrEdit',
                          L: 100,
                          T: 5,
                          W: 220,
                          Data: { Text: 'tfVarName1',
                                  array: array,
                                  ref:ref }
                        },
                        tfDesc: {
                          Type: 'wfrMemo',
                          L: 412,
                          T: 5,
                          R: 5,
                          B: 5,
                          Data: { Text: 'tfDesc',
                                  array: array,
                                  ref:ref }
                        },
                        btRemove: {
                          Type: 'wfrButton',
                          L: 323,
                          T: 63,
                          Data: {
                            HTMLEncode: true,
                            Text: '🗑️ Remove',
                                    array: array,
                                    ref:ref
                          }
                        },
                        btMoveUp: {
                          Type: 'wfrButton',
                          L: 322,
                          T: 34,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔺',
                            array: array,
                            ref:ref
                          }
                        },
                        btMoveDown: {
                          Type: 'wfrButton',
                          L: 365,
                          T: 34,
                          Data: {
                            HTMLEncode: true,
                            Text: '🔻',
                            array: array,
                            ref:ref
                          }
                        }
                      }
                    }
                  }
                }
              }
TemplateComponents = {
  componentInput: componentInput,
  componentPhrase: componentPhrase,
  componentQuestion: componentQuestion
};
