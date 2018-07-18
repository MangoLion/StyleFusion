var AppForm = null;

styles = [];

function ngMain()
{
  if (AppForm)
    AppForm.Dispose();

  // Start coding right here
  AppForm = new ngControls({
    btStyle: {
      Type: 'wfrButton',
      L: 0,
      T: 140,
      R: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Style Format Editor'
      },
      Events: {
        OnClick: function (e) {
          styleMain();
        }
      }
    },
    btTemplate: {
      Type: 'wfrButton',
      L: 0,
      T: 167,
      R: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Template Editor'
      },
      Events: {
        OnClick: function (e) {
          templateMain();
        }
      }
    },
    btCreate: {
      Type: 'wfrButton',
      L: 0,
      T: 194,
      R: 0,
      Data: {
        HTMLEncode: true,
        Text: 'Content Creator'
      },
      Events: {
        OnClick: function (e) {
          contentMain();
        }
      }
    }
  });
  AppForm.Update();
}
