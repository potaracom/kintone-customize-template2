(function () {
  "use strict";

  interface Event {
    appId: number;
    viewType: string;
    viewId: number;
    viewName: string;
    records: kintone.types.SavedFields[];
    offset: number;
    size: number;
    date: null;
    type: "list";
  }

  kintone.events.on("app.record.index.show", function (event: Event) {
    console.log();
  });
})();
