/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.source = `
@Component
@Entry
struct MyComponent {
  build() {
    Column() {
      Banner()
      Banner()
       .width(100)
      Banner()
       .width(100)
       .height(200)
      Banner({value: "Hello"})
      Banner({value: "Hello"})
       .width(100)
      Banner({value: "Hello"})
       .width(100)
       .height(200)
    }
  }
}

@Component
struct Banner {
  value: string = "Hello"
  build() {
    Column() {
      Text(this.value)
    }
  }
}`

exports.expectResult =
`"use strict";
class MyComponent extends ViewPU {
    constructor(parent, params, __localStorage) {
        super(parent, __localStorage);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const elmtId = ViewStackProcessor.AllocateNewElmetIdForNextComponent();
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ViewPU.create(new Banner(this, {}));
            ViewStackProcessor.StopGetAccessRecording();
        }
        __Common__.create();
        __Common__.width(100);
        {
            const elmtId = ViewStackProcessor.AllocateNewElmetIdForNextComponent();
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ViewPU.create(new Banner(this, {}));
            ViewStackProcessor.StopGetAccessRecording();
        }
        __Common__.pop();
        __Common__.create();
        __Common__.width(100);
        __Common__.height(200);
        {
            const elmtId = ViewStackProcessor.AllocateNewElmetIdForNextComponent();
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ViewPU.create(new Banner(this, {}));
            ViewStackProcessor.StopGetAccessRecording();
        }
        __Common__.pop();
        {
            const elmtId = ViewStackProcessor.AllocateNewElmetIdForNextComponent();
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ViewPU.create(new Banner(this, { value: "Hello" }));
            ViewStackProcessor.StopGetAccessRecording();
        }
        __Common__.create();
        __Common__.width(100);
        {
            const elmtId = ViewStackProcessor.AllocateNewElmetIdForNextComponent();
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ViewPU.create(new Banner(this, { value: "Hello" }));
            ViewStackProcessor.StopGetAccessRecording();
        }
        __Common__.pop();
        __Common__.create();
        __Common__.width(100);
        __Common__.height(200);
        {
            const elmtId = ViewStackProcessor.AllocateNewElmetIdForNextComponent();
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ViewPU.create(new Banner(this, { value: "Hello" }));
            ViewStackProcessor.StopGetAccessRecording();
        }
        __Common__.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class Banner extends ViewPU {
    constructor(parent, params, __localStorage) {
        super(parent, __localStorage);
        this.value = "Hello";
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.value !== undefined) {
            this.value = params.value;
        }
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.value = undefined;
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.value);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MyComponent(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
`