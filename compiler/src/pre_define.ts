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

import path from 'path';

export const NATIVE_MODULE: Set<string> = new Set(
  ['system.app', 'ohos.app', 'system.router', 'system.curves', 'ohos.curves', 'system.matrix4', 'ohos.matrix4']);
export const VALIDATE_MODULE: string[] = ['application', 'util', 'screen', 'mediaquery'];
export const SYSTEM_PLUGIN: string = 'system';
export const OHOS_PLUGIN: string = 'ohos';

export const COMPONENT_DECORATOR_ENTRY: string = '@Entry';
export const COMPONENT_DECORATOR_PREVIEW: string = '@Preview';
export const COMPONENT_DECORATOR_COMPONENT: string = '@Component';
export const COMPONENT_DECORATOR_CUSTOM_DIALOG: string = '@CustomDialog';

export const COMPONENT_NON_DECORATOR: string = 'regular';
export const COMPONENT_STATE_DECORATOR: string = '@State';
export const COMPONENT_PROP_DECORATOR: string = '@Prop';
export const COMPONENT_LINK_DECORATOR: string = '@Link';
export const COMPONENT_STORAGE_PROP_DECORATOR: string = '@StorageProp';
export const COMPONENT_STORAGE_LINK_DECORATOR: string = '@StorageLink';
export const COMPONENT_PROVIDE_DECORATOR: string = '@Provide';
export const COMPONENT_CONSUME_DECORATOR: string = '@Consume';
export const COMPONENT_OBJECT_LINK_DECORATOR: string = '@ObjectLink';
export const COMPONENT_WATCH_DECORATOR: string = '@Watch';
export const COMPONENT_BUILDERPARAM_DECORATOR: string = '@BuilderParam';
export const COMPONENT_LOCAL_STORAGE_LINK_DECORATOR: string = '@LocalStorageLink';
export const COMPONENT_LOCAL_STORAGE_PROP_DECORATOR: string = '@LocalStorageProp';

export const COMPONENT_DECORATORS_PARAMS: Set<string> = new Set([COMPONENT_CONSUME_DECORATOR,
  COMPONENT_STORAGE_PROP_DECORATOR, COMPONENT_STORAGE_LINK_DECORATOR, COMPONENT_PROVIDE_DECORATOR,
  COMPONENT_WATCH_DECORATOR]);
export const INNER_COMPONENT_DECORATORS: Set<string> = new Set([COMPONENT_DECORATOR_ENTRY,
  COMPONENT_DECORATOR_PREVIEW, COMPONENT_DECORATOR_COMPONENT, COMPONENT_DECORATOR_CUSTOM_DIALOG]);
export const INNER_COMPONENT_MEMBER_DECORATORS: Set<string> = new Set([COMPONENT_STATE_DECORATOR,
  COMPONENT_PROP_DECORATOR, COMPONENT_LINK_DECORATOR, COMPONENT_STORAGE_PROP_DECORATOR,
  COMPONENT_STORAGE_LINK_DECORATOR, COMPONENT_PROVIDE_DECORATOR, COMPONENT_CONSUME_DECORATOR,
  COMPONENT_OBJECT_LINK_DECORATOR, COMPONENT_WATCH_DECORATOR, COMPONENT_BUILDERPARAM_DECORATOR,
  COMPONENT_LOCAL_STORAGE_LINK_DECORATOR, COMPONENT_LOCAL_STORAGE_PROP_DECORATOR]);

export const COMPONENT_OBSERVED_DECORATOR: string = '@Observed';
export const COMPONENT_BUILDER_DECORATOR: string = '@Builder';
export const COMPONENT_EXTEND_DECORATOR: string = '@Extend';
export const COMPONENT_STYLES_DECORATOR: string = '@Styles';
export const CHECK_COMPONENT_EXTEND_DECORATOR: string = 'Extend';

export const OBSERVED_PROPERTY_SIMPLE: string = 'ObservedPropertySimple';
export const OBSERVED_PROPERTY_OBJECT: string = 'ObservedPropertyObject';
export const SYNCHED_PROPERTY_SIMPLE_ONE_WAY: string = 'SynchedPropertySimpleOneWay';
export const SYNCHED_PROPERTY_SIMPLE_TWO_WAY: string = 'SynchedPropertySimpleTwoWay';
export const SYNCHED_PROPERTY_OBJECT_TWO_WAY: string = 'SynchedPropertyObjectTwoWay';
export const SYNCHED_PROPERTY_NESED_OBJECT: string = 'SynchedPropertyNesedObject';

export const INITIALIZE_CONSUME_FUNCTION: string = 'initializeConsume';
export const ADD_PROVIDED_VAR: string = 'addProvidedVar';

export const APP_STORAGE: string = 'AppStorage';
export const APP_STORAGE_SET_AND_PROP: string = 'SetAndProp';
export const APP_STORAGE_SET_AND_LINK: string = 'SetAndLink';

export const PAGE_ENTRY_FUNCTION_NAME: string = 'loadDocument';
export const STORE_PREVIEW_COMPONENTS: string = 'storePreviewComponents';
export const PREVIEW_COMPONENT_FUNCTION_NAME: string = 'previewComponent';
export const GET_PREVIEW_FLAG_FUNCTION_NAME: string = 'getPreviewComponentFlag';

export const COMPONENT_DECORATOR_NAME_COMPONENT: string = 'Component';
export const COMPONENT_DECORATOR_NAME_CUSTOMDIALOG: string = 'CustomDialog';
export const CUSTOM_DECORATOR_NAME: Set<string> = new Set([
  COMPONENT_DECORATOR_NAME_COMPONENT, COMPONENT_DECORATOR_NAME_CUSTOMDIALOG
]);

export const EXTNAME_ETS: string = '.ets';
export const NODE_MODULES: string = 'node_modules';
export const INDEX_ETS: string = 'index.ets';
export const PACKAGE_JSON: string = 'package.json';
export const CUSTOM_COMPONENT_DEFAULT: string = 'default';

export const BASE_COMPONENT_NAME: string = 'View';
export const STRUCT: string = 'struct';
export const CLASS: string = 'class';
export const COMPONENT_BUILD_FUNCTION: string = 'build';
export const COMPONENT_RENDER_FUNCTION: string = 'render';
export const COMPONENT_TRANSITION_FUNCTION: string = 'pageTransition';
export const COMPONENT_TRANSITION_NAME: string = 'PageTransition';
export const CUSTOM_COMPONENT: string = 'CustomComponent';

export const COMPONENT_BUTTON: string = 'Button';
export const COMPONENT_FOREACH: string = 'ForEach';
export const COMPONENT_LAZYFOREACH: string = 'LazyForEach';
export const IS_RENDERING_IN_PROGRESS: string = 'isRenderingInProgress';
export const FOREACH_OBSERVED_OBJECT: string = 'ObservedObject';
export const FOREACH_GET_RAW_OBJECT: string = 'GetRawObject';
export const COMPONENT_IF: string = 'If';
export const COMPONENT_IF_BRANCH_ID_FUNCTION: string = 'branchId';
export const COMPONENT_IF_UNDEFINED: string = 'undefined';
export const GLOBAL_CONTEXT: string = 'Context';
export const ATTRIBUTE_ANIMATION: string = 'animation';
export const ATTRIBUTE_ANIMATETO: string = 'animateTo';
export const ATTRIBUTE_STATESTYLES: string = 'stateStyles';
export const ATTRIBUTE_ID: string = 'id';

export const COMPONENT_CONSTRUCTOR_ID: string = 'compilerAssignedUniqueChildId';
export const COMPONENT_CONSTRUCTOR_PARENT: string = 'parent';
export const COMPONENT_CONSTRUCTOR_PARAMS: string = 'params';
export const COMPONENT_CONSTRUCTOR_UNDEFINED: string = 'undefined';
export const COMPONENT_CONSTRUCTOR_LOCALSTORAGE: string = 'localStorage';
export const COMPONENT_SET_AND_LINK: string = 'setAndLink';
export const COMPONENT_SET_AND_PROP: string = 'setAndProp';

export const BUILD_ON: string = 'on';
export const BUILD_OFF: string = 'off';

export const COMPONENT_CREATE_FUNCTION: string = 'create';
export const COMPONENT_CREATE_LABEL_FUNCTION: string = 'createWithLabel';
export const COMPONENT_CREATE_CHILD_FUNCTION: string = 'createWithChild';
export const COMPONENT_POP_FUNCTION: string = 'pop';
export const COMPONENT_DEBUGLINE_FUNCTION: string = 'debugLine';
export const COMPONENT_COMMON: string = '__Common__';

export const COMPONENT_CONSTRUCTOR_UPDATE_PARAMS: string = 'updateWithValueParams';
export const COMPONENT_CONSTRUCTOR_DELETE_PARAMS: string = 'aboutToBeDeleted';
export const CREATE_GET_METHOD: string = 'get';
export const CREATE_SET_METHOD: string = 'set';
export const CREATE_NEWVALUE_IDENTIFIER: string = 'newValue';
export const CREATE_CONSTRUCTOR_PARAMS: string = 'params';
export const CREATE_CONSTRUCTOR_SUBSCRIBER_MANAGER: string = 'SubscriberManager';
export const CREATE_CONSTRUCTOR_GET_FUNCTION: string = 'Get';
export const CREATE_CONSTRUCTOR_DELETE_FUNCTION: string = 'delete';
export const ABOUT_TO_BE_DELETE_FUNCTION_ID: string = 'id';
export const COMPONENT_WATCH_FUNCTION: string = 'declareWatch';

export const CREATE_STATE_METHOD: string = 'createState';
export const CREATE_PROP_METHOD: string = 'createProp';
export const CREATE_LINK_METHOD: string = 'createLink';
export const CREATE_OBSERVABLE_OBJECT_METHOD: string = 'createObservableObject';

export const CUSTOM_COMPONENT_EARLIER_CREATE_CHILD: string = 'earlierCreatedChild_';
export const CUSTOM_COMPONENT_FUNCTION_FIND_CHILD_BY_ID: string = 'findChildById';
export const CUSTOM_COMPONENT_NEEDS_UPDATE_FUNCTION: string = 'needsUpdate';
export const CUSTOM_COMPONENT_MARK_STATIC_FUNCTION: string = 'markStatic';

export const COMPONENT_GESTURE: string = 'Gesture';
export const COMPONENT_GESTURE_GROUP: string = 'GestureGroup';
export const GESTURE_ATTRIBUTE: string = 'gesture';
export const PARALLEL_GESTURE_ATTRIBUTE: string = 'parallelGesture';
export const PRIORITY_GESTURE_ATTRIBUTE: string = 'priorityGesture';
export const GESTURE_ENUM_KEY: string = 'GesturePriority';
export const GESTURE_ENUM_VALUE_HIGH: string = 'High';
export const GESTURE_ENUM_VALUE_LOW: string = 'Low';
export const GESTURE_ENUM_VALUE_PARALLEL: string = 'Parallel';

export const RESOURCE: string = '$r';
export const RESOURCE_RAWFILE: string = '$rawfile';
export const RESOURCE_NAME_ID: string = 'id';
export const RESOURCE_NAME_TYPE: string = 'type';
export const RESOURCE_NAME_PARAMS: string = 'params';
export const RESOURCE_NAME_BUNDLE: string = 'bundleName';
export const RESOURCE_NAME_MODULE: string = 'moduleName';
export const RESOURCE_TYPE = {
  color: 10001,
  float: 10002,
  string: 10003,
  plural: 10004,
  boolean: 10005,
  intarray: 10006,
  integer: 10007,
  pattern: 10008,
  strarray: 10009,
  media: 20000,
  rawfile: 30000
};

export const WORKERS_DIR: string = 'workers';
export const WORKER_OBJECT: string = 'Worker';

export const SET_CONTROLLER_METHOD: string = 'setController';
export const SET_CONTROLLER_CTR: string = 'ctr';
export const SET_CONTROLLER_CTR_TYPE: string = 'CustomDialogController';
export const JS_DIALOG: string = 'jsDialog';
export const CUSTOM_DIALOG_CONTROLLER_BUILDER: string = 'builder';

export const BUILDER_ATTR_NAME: string = 'builder';
export const BUILDER_ATTR_BIND: string = 'bind';

export const GEOMETRY_VIEW: string = 'GeometryView';

export const MODULE_SHARE_PATH: string = 'src' + path.sep + 'main' + path.sep + 'ets' + path.sep + 'share';
export const BUILD_SHARE_PATH: string = '../share';
export const MODULE_ETS_PATH: string = 'src' + path.sep + 'main' + path.sep + 'ets';

export const THIS: string = 'this';
export const STYLES: string = 'Styles';
export const VISUAL_STATE: string = 'visualState';
export const VIEW_STACK_PROCESSOR: string = 'ViewStackProcessor';

export const BIND_POPUP: string = 'bindPopup';
export const BIND_POPUP_SET: Set<string> = new Set(['bindPopup']);
export const BIND_DRAG_SET: Set<string> = new Set(['onDragStart', 'onItemDragStart']);

export const CHECKED: string = 'checked';
export const RADIO: string = 'Radio';
export const $$_VALUE: string = 'value';
export const $$_CHANGE_EVENT: string = 'changeEvent';
export const TEXT_TIMER: string = 'TextTimer';
export const REFRESH: string = 'Refresh';
export const REFRESHING: string = 'refreshing';
export const FORMAT: string = 'format';
export const IS_COUNT_DOWN: string = 'isCountDown';
export const COUNT: string = 'count';
export const $$_THIS: string = '$$this';
export const $$_NEW_VALUE: string = 'newValue';
export const $$: string = '$$';
export const $$_VISIBILITY: string = 'visibility';
export const $$_BLOCK_INTERFACE: Set<string> = new Set([REFRESH]);
export const STYLE_ADD_DOUBLE_DOLLAR: Set<string> = new Set([BIND_POPUP, $$_VISIBILITY]);
export const PROPERTIES_ADD_DOUBLE_DOLLAR: Map<string, Set<string>> = new Map([
  [RADIO, new Set([CHECKED])], [TEXT_TIMER, new Set([FORMAT, COUNT, IS_COUNT_DOWN])], [REFRESH, new Set([REFRESHING])]
]);

export const INTERFACE_NAME_SUFFIX:string = '_Params';
export const OBSERVED_PROPERTY_ABSTRACT:string = 'ObservedPropertyAbstract';

export const SUPERVISUAL: string = './supervisual';
export const SUPERVISUAL_SOURCEMAP_EXT: string = '.visual.js.map';

export const INSTANCE: string = 'Instance';

export const COMPONENT_TOGGLE: string = 'Toggle';
export const TTOGGLE_CHECKBOX: string = 'Checkbox';
export const TOGGLE_SWITCH: string = 'Switch';

export const ENTRY_TXT: string = 'entry.txt';
export const FILESINFO_TXT: string = 'filesInfo.txt';
export const NPMENTRIES_TXT: string = 'npmEntries.txt';
export const MODULES_CACHE: string = 'modules.cache';
export const MODULES_ABC: string = 'modules.abc';
export const MODULELIST_JSON: string = 'moduleList.json';

export const ESMODULE: string = 'esmodule';
export const JSBUNDLE: string = 'jsbundle';
export const ARK: string = 'ark';
export const TEMPORARY: string = 'temporary';
export const MAIN: string = 'main';
export const AUXILIARY: string = 'auxiliary';
export const ZERO: string = '0';
export const ONE: string = '1';
export const EXTNAME_JS: string = '.js';
export const EXTNAME_TS: string = '.ts';
export const EXTNAME_JS_MAP: string = '.js.map';
export const EXTNAME_TS_MAP: string = '.ts.map';
export const EXTNAME_MJS: string = '.mjs';
export const EXTNAME_CJS: string = '.cjs';
export const EXTNAME_D_TS: string = '.d.ts';
export const EXTNAME_ABC: string = '.abc';
export const EXTNAME_PROTO_BIN: string = '.protoBin';

export const SUCCESS: number = 0;
export const FAIL: number = 1;

export const TS2ABC: string = 'ts2abc';
export const ES2ABC: string = 'es2abc';

export const GENERATE_ID = 'generateId';
export const _GENERATE_ID = '__generate__Id';

export const COMPONENT_CONSTRUCTOR_INITIAL_PARAMS: string = 'setInitiallyProvidedValue';
export const COMPONENT_RERENDER_FUNCTION: string = 'rerender';
export const COMPONENT_CONSTRUCTOR_PURGE_VARIABLE_DEP: string = 'purgeVariableDependenciesOnElmtId';
export const MARKDEPENDENTELEMENTSDIRTY: string = 'markDependentElementsDirty';
export const ABOUT_TO_BE_DELETE_FUNCTION_ID__: string = 'id__';
export const RMELMTID: string = 'rmElmtId';
export const PURGEDEPENDENCYONELMTID: string = 'purgeDependencyOnElmtId';
export const SETPROPERTYUNCHANGED: string = 'SetPropertyUnchanged';
export const ABOUTTOBEDELETEDINTERNAL: string = 'aboutToBeDeletedInternal';
export const UPDATEDIRTYELEMENTS: string = 'updateDirtyElements';
export const BASICDECORATORS: Set<string> = new Set([COMPONENT_STATE_DECORATOR, COMPONENT_PROP_DECORATOR,
  COMPONENT_LINK_DECORATOR, COMPONENT_OBJECT_LINK_DECORATOR]);
export const LINKS_DECORATORS: Set<string> = new Set([COMPONENT_LINK_DECORATOR, COMPONENT_OBJECT_LINK_DECORATOR]);
export const ISINITIALRENDER: string = 'isInitialRender';
export const ELMTID: string = 'elmtId';
export const STARTGETACCESSRECORDINGFOR: string = 'StartGetAccessRecordingFor';
export const STOPGETACCESSRECORDING: string = 'StopGetAccessRecording';
export const VIEWSTACKPROCESSOR: string = 'ViewStackProcessor';
export const OBSERVECOMPONENTCREATION: string = 'observeComponentCreation';
export const ISLAZYCREATE: string = 'isLazyCreate';
export const DEEPRENDERFUNCTION: string = 'deepRenderFunction';
export const ITEMCREATION: string = 'itemCreation';
export const OBSERVEDSHALLOWRENDER: string = 'observedShallowRender';
export const OBSERVEDDEEPRENDER:string = 'observedDeepRender';
export const ItemComponents: string[] = ['ListItem', 'GridItem'];
export const FOREACHITEMGENFUNCTION: string = 'forEachItemGenFunction';
export const __LAZYFOREACHITEMGENFUNCTION: string = '__lazyForEachItemGenFunction';
export const _ITEM: string = '_item';
export const FOREACHITEMIDFUNC: string = 'forEachItemIdFunc';
export const __LAZYFOREACHITEMIDFUNC: string = '__lazyForEachItemIdFunc';
export const FOREACHUPDATEFUNCTION: string = 'forEachUpdateFunction';
export const ALLOCATENEWELMETIDFORNEXTCOMPONENT: string = 'AllocateNewElmetIdForNextComponent';
export const STATE_OBJECTLINK_DECORATORS: string[] = [COMPONENT_STATE_DECORATOR, COMPONENT_OBJECT_LINK_DECORATOR];
export const COMPONENT_INITIAl_RENDER_FUNCTION: string = 'initialRender';
export const GRID_COMPONENT: string = 'Grid';
export const GRIDITEM_COMPONENT: string = 'GridItem';
export const WILLUSEPROXY: string = 'willUseProxy';
export const TABCONTENT_COMPONENT: string = 'TabContent';
export const BASE_COMPONENT_NAME_PU: string = 'ViewPU';
export const GLOBAL_THIS: string = 'globalThis';
export const OBSERVED_PROPERTY_SIMPLE_PU: string = 'ObservedPropertySimplePU';
export const OBSERVED_PROPERTY_OBJECT_PU: string = 'ObservedPropertyObjectPU';
export const SYNCHED_PROPERTY_SIMPLE_ONE_WAY_PU: string = 'SynchedPropertySimpleOneWayPU';
export const SYNCHED_PROPERTY_SIMPLE_TWO_WAY_PU: string = 'SynchedPropertySimpleTwoWayPU';
export const SYNCHED_PROPERTY_OBJECT_TWO_WAY_PU: string = 'SynchedPropertyObjectTwoWayPU';
export const SYNCHED_PROPERTY_NESED_OBJECT_PU: string = 'SynchedPropertyNesedObjectPU';
export const OBSERVED_PROPERTY_ABSTRACT_PU:string = 'ObservedPropertyAbstractPU';
export const COMPONENT_CONSTRUCTOR_LOCALSTORAGE_PU: string = '__localStorage';
export const COMPONENT_CONSTRUCTOR_LOCALSTORAGE_TYPE_PU: string = 'LocalStorage';
