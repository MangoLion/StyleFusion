var setComponents = function(array, parent, component, func, type){

  parent.Update();
  
  for (var i = 0; i < array.length; i++) {
    var field = array[i];
    AppForm[type + field.index].Dispose();
    delete AppForm[type + field.index];
  }

  while (array.length) { array.pop(); }

  var addControl = {};
  for (var i = 0; i < component[type+'s'].length; i++) {
    var field = component[type+'s'][i];
    var fieldControl = func(field, array);
    fieldControl.field = field;
    addControl[type + array.length] = fieldControl;
    fieldControl.index = array.length;
    array.push(fieldControl);
  }

  AppForm.AddControls(addControl, parent);
  //var id = setInterval(ringFunc,1000);

  parent.Update();
  AppForm.Update();
  /**for (var i = 0; i < array.length; i++) {
    var fieldControl = array[i];
    AppForm[type + fieldControl.index].Update();
    AppForm[type + fieldControl.index].Controls.group.Update();
  }*/
}

var addComponent = function(array, parent, component, func, type){

  var addControl = {};
  var field = component;
  var fieldControl = func(field, array);
  fieldControl.field = field;
  addControl[type + array.length] = fieldControl;
  fieldControl.index = array.length;
  array.push(fieldControl);

  AppForm.AddControls(addControl, parent);
  AppForm[type + fieldControl.index].Update();
  parent.Update();
  AppForm.Update();
}

makeStyle = function(name){
  return {
    Text: name,
    name: name,
    categories: [],
    templates: []
  }
}

var makeWindowUpload = function(){
  return {
  Type: 'wfrWindow',
  L: 240,
  T: 160,
  W: 300,
  H: 108,
  CloseBtn: true,
  Data: {
    HTMLEncode: true,
    Text: 'Upload',
    Visible: false,
    Modal: true,
  },
  Controls: {
    wfrText1: {
      Type: 'wfrText',
      L: 12,
      T: 9,
      Data: {
        HTMLEncode: false,
        Text: '<input id="uploadfile" type="file" />'
      }
    },
    btUpload: {
      Type: 'wfrButton',
      L: 109,
      T: 42,
      Data: {
        HTMLEncode: true,
        Text: 'Upload'
      },
      Events: {
        OnClick: function(e){
          //var reader = new FileReader();
          var file = document.getElementById("uploadfile").files[0];
          var fileReader = new FileReader();
          fileReader.onload = function(fileLoadedEvent){
            var textFromFileLoaded = fileLoadedEvent.target.result;
            styles = JSON.parse(textFromFileLoaded);
            AppForm.listStyle.SetItems(styles);
            AppForm.listStyle.Update();
          };

          fileReader.readAsText(file, "UTF-8");
          AppForm.windowUpload.Hide();
        }
      }

    }
  }
}
}

SFComponents = {
  makeStyle: makeStyle,
  addComponent: addComponent,
  setComponents: setComponents,
  makeWindowUpload: makeWindowUpload
}
