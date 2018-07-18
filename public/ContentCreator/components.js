var objectContent= function(name){
  return {
    Text: name,
    name:name,
    components: []
  }
}

var componentComponent= function(ref, array){
          return  {
                Type: 'wfrFrame',
                L: 0,
                T: 0,
                H: 140,
                R: 0,
                Data: { HTMLEncode: true },
                Controls: {
                  groupComponent: {
                    Type: 'wfrGroup',
                    L: 0,
                    T: 0,
                    R: 0,
                    B: 0,
                    Data: {
                      HTMLEncode: true,
                      Text: 'groupComponent'
                    },
                    Controls: {
                      btRemove: {
                        Type: 'wfrButton',
                        T: 0,
                        R: 0,
                        Data: {
                          HTMLEncode: true,
                          Text: '🗑️',
                          array: array,
                          ref: ref
                        }
                      },
                      btMoveUp: {
                        Type: 'wfrButton',
                        R: 0,
                        T: 26,
                        Data: {
                          HTMLEncode: true,
                          Text: '🔺',
                          array: array,
                          ref: ref
                        }
                      },
                      btMoveDown: {
                        Type: 'wfrButton',
                        R: 0,
                        T: 53,
                        Data: {
                          HTMLEncode: true,
                          Text: '🔻',
                          array: array,
                          ref: ref
                        }
                      },
                      tfPhrase: {
                        Type: 'wfrMemo',
                        L: 3,
                        T: 0,
                        R: 38,
                        B: 0,
                        Data: { Text: 'tfPhrase' }
                      },
                      btCopy: {
                        Type: 'wfrButton',
                        R: 1,
                        T: 80,
                        Data: {
                          HTMLEncode: true,
                          Text: '📋 ',
                          array: array,
                          ref: ref
                        }
                      }
                    }
                  }
                }
              }
          }

var componentQuestion = function(ref, array){
  return {
            Type: 'wfrFrame',
            L: 0,
            T: 0,
            H: 66,
            R: 0,
            Controls: {
              lbQuestion: {
                Type: 'wfrLabel',
                L: 5,
                T: 5,
                Data: {
                  HTMLEncode: true,
                  Text: 'Question'
                }
              },
              tfAnswer: {
                Type: 'wfrMemo',
                L: 0,
                T: 26,
                H: 40,
                R: 0,
                Data: { Text: '' }
              },
              btInfo: {
                Type: 'wfrButton',
                T: 0,
                R: 38,
                Data: {
                  HTMLEncode: true,
                  Text: '❓'
                }
              },
              btRandom: {
                Type: 'wfrButton',
                T: 0,
                R: 0,
                Data: {
                  HTMLEncode: true,
                  Text: '🎲'
                }
              }
            }
          }
}

ContentComponents = {
  componentComponent: componentComponent,
  objectContent: objectContent
}
