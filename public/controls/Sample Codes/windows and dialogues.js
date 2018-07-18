/*
 * Controls.js Examples
 * http://controlsjs.com/
 *
 * Copyright (c) Position s.r.o.  All rights reserved.
 *
 */

function AppOpenFormDialog()
{
  var win=ngCreateWindow({
    Type: 'wfrDialog',
    L:0, T: 0, W: 200, H:240,
    Data: {
      Text: 'wfrDialog',
      DisposeOnClose: true
    },
    Controls: {
      Label5: {
        Type: 'wfrLabel',
        L: 50, T: 20, W: 100,
        Data: {
          TextAlign: 'center',
          Text: 'wfrProgressBar'
        }
      },
      Progress1: {
        Type: 'wfrProgressBar',
        L: 20, T: 40, W: 160, H:10,
        Data: {
          Position: 30
          //Smooth: true
        }
      },
      ProgressAnim1: {
        Type: 'wfrCheckBox',
        L: 20, T: 64,
        Data: {
          Text: 'Process Animation'
        },
        Events: {
          OnClick: function(e) {
            if(this.Checked) e.Owner.Owner.Owner.Controls.Progress1.BeginProcess();
            else             e.Owner.Owner.Owner.Controls.Progress1.EndProcess();
          }
        }
      },
      Label6: {
        Type: 'wfrLabel',
        L: 50, T: 90, W: 100,
        Data: {
          TextAlign: 'center',
          Text: 'wfrProgressDot'
        }
      },
      Progress2: {
        Type: 'wfrProgressDot',
        L: 20, T: 110, W: 160
      },
      Link1: {
        Type: 'wfrLink',
        L: 10, B: 5,
        Data: {
          Text: 'Open new dialog...'
        },
        Events: {
          OnClick: AppOpenFormDialog
        }
      },
      Button3: {
        Type: 'wfrButton',
        L: 60, B: 30, W: 80,
        Data: {
          Text: 'OK'
        },
        Events: {
          OnClick: function(e) { e.Owner.Owner.Owner.Close(); }
        }
      }
    }
  });
  if(win) win.Show();
  return true;
}
function AppFormWindow()
{
  return ({
    ShowWindow: {
      Type: 'wfrButton',
      L: 10, T: 10,
      Data: {
        Text: 'Show Window'
      },
      Events: {
        OnClick: function(e) { AppForm.Window1.Show(); }
      }
    },

    Window1:
    {
      Type: 'wfrWindow',
      L:10, T: 10, W: 400, H:290,
      CloseBtn: true,
      MaxBtn: true,
      MinBtn: true,
//      HelpBtn: true,
      Data: {
//        Moveable: false,
        Img: WireframeControls.Images.Eye,
        Text: 'wfrWindow',
        MinWidth:170,
        MinHeight:270
      },
      Controls: {
        Text1: {
          Type: 'wfrText',
          L: 10, T: 10, R: 150, B: 10,
          Data: {
            TextAlign: 'justify',
            Text: 'wfrText<br />Lorem ipsum dolor sit amet consectetuer dui Vestibulum quis risus tincidunt. Ac tellus wisi Quisque Morbi eget Vestibulum condimentum quis semper consequat. Eros sociis ridiculus orci sagittis malesuada lorem a Curabitur volutpat dignissim. Tincidunt ornare interdum adipiscing rhoncus habitasse sit Nulla ut porttitor Phasellus. Facilisis tellus In laoreet elit vitae ante augue laoreet mauris sit. Vitae nonummy laoreet venenatis platea tellus.</p>',
            Alt: 'wfrText'
          }
        },
        WinLabel1: {
          Type: 'wfrLabel',
          R: 10, T: 10, W: 120,
          Data: {
            TextAlign: 'left',
            Text: 'ngImage'
          }
        },
        Image1: {
          Type: 'ngImage',
          R: 10, T: 30,
          Data: {
            Img: { Src: ngApp.AppPath+'image.png', L:0, T:0, W: 120, H: 166 },
            Alt: 'bgImage'
          }
        },
        WinButton1: {
          Type: 'wfrButton',
          R: 10, B: 10, W: 110,
          Data: {
            Text: 'Open Dialog'
          },
          Events: {
            OnClick: AppOpenFormDialog
          }
        }
      }
    }
  });
}
