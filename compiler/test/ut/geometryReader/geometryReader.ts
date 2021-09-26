/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

export const source: string = `
@Entry
@Component
struct GeometryReaderTest {
    build() {
        Column() {
            GeometryView((obj) => {
              Column() {
                Text("Text in GeometryView, Height:" + obj.height)
                .fontSize(30)
              }
            }).backgroundColor(Color.Yellow)
        }
    }
}
`

export const expectResult: string =
`class GeometryReaderTest extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        GeometryView.create((obj) => {
            Column.create();
            Text.create("Text in GeometryView, Height:" + obj.height);
            Text.fontSize(30);
            Text.pop();
            Column.pop();
        });
        GeometryView.backgroundColor(Color.Yellow);
        Column.pop();
    }
}
loadDocument(new GeometryReaderTest("1", undefined, {}));
`