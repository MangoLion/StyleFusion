
var componentField = function(ref, array){ return{
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
                      OnCreated: function (c, refs, options) {
                        c.SetText(ref.name);
                      },
                      Data: { Text: 'tfName' },
                      Events: {
                        OnTextChanged: function (c) {
                          ref.name = c.Text;
                        }
                      }
                    },
                    tfDesc: {
                      Type: 'wfrMemo',
                      L: 314,
                      T: 21,
                      R: 0,
                      B: 5,
                      OnCreated: function (c, refs, options) {
                        c.SetText(ref.desc);
                      },
                      Data: { Text: 'wfrMemo1' },
                      Events: {
                        OnTextChanged: function (c) {
                          ref.desc = c.Text;
                        }
                      }
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

StyleComponents = {
  componentField: componentField
};
