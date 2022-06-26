import * as React from 'react';
import type { IconType } from 'rc-tree/lib/interface';
import type { BaseSelectRef, BaseSelectPropsWithoutPrivate, SelectProps } from 'rc-select';
import TreeNode from './TreeNode';
import { SHOW_ALL, SHOW_PARENT, SHOW_CHILD } from './utils/strategyUtil';
import type { CheckedStrategy } from './utils/strategyUtil';
export declare type OnInternalSelect = (value: RawValueType, info: {
    selected: boolean;
}) => void;
export declare type RawValueType = string | number;
export interface LabeledValueType {
    key?: React.Key;
    value?: RawValueType;
    label?: React.ReactNode;
    /** Only works on `treeCheckStrictly` */
    halfChecked?: boolean;
}
export declare type SelectSource = 'option' | 'selection' | 'input' | 'clear';
export declare type DraftValueType = RawValueType | LabeledValueType | (RawValueType | LabeledValueType)[];
/** @deprecated This is only used for legacy compatible. Not works on new code. */
export interface LegacyCheckedNode {
    pos: string;
    node: React.ReactElement;
    children?: LegacyCheckedNode[];
}
export interface ChangeEventExtra {
    /** @deprecated Please save prev value by control logic instead */
    preValue: LabeledValueType[];
    triggerValue: RawValueType;
    /** @deprecated Use `onSelect` or `onDeselect` instead. */
    selected?: boolean;
    /** @deprecated Use `onSelect` or `onDeselect` instead. */
    checked?: boolean;
    /** @deprecated This prop not work as react node anymore. */
    triggerNode: React.ReactElement;
    /** @deprecated This prop not work as react node anymore. */
    allCheckedNodes: LegacyCheckedNode[];
}
export interface FieldNames {
    value?: string;
    label?: string;
    children?: string;
}
export interface InternalFieldName extends Omit<FieldNames, 'label'> {
    _title: string[];
}
export interface SimpleModeConfig {
    id?: React.Key;
    pId?: React.Key;
    rootPId?: React.Key;
}
export interface BaseOptionType {
    disabled?: boolean;
    checkable?: boolean;
    disableCheckbox?: boolean;
    children?: BaseOptionType[];
    [name: string]: any;
}
export interface DefaultOptionType extends BaseOptionType {
    value?: RawValueType;
    title?: React.ReactNode;
    label?: React.ReactNode;
    key?: React.Key;
    children?: DefaultOptionType[];
}
export interface LegacyDataNode extends DefaultOptionType {
    props: any;
}
export interface TreeSelectProps<ValueType = any, OptionType extends BaseOptionType = DefaultOptionType> extends Omit<BaseSelectPropsWithoutPrivate, 'mode'> {
    prefixCls?: string;
    id?: string;
    value?: ValueType;
    defaultValue?: ValueType;
    onChange?: (value: ValueType, labelList: React.ReactNode[], extra: ChangeEventExtra) => void;
    searchValue?: string;
    /** @deprecated Use `searchValue` instead */
    inputValue?: string;
    onSearch?: (value: string) => void;
    autoClearSearchValue?: boolean;
    filterTreeNode?: boolean | ((inputValue: string, treeNode: DefaultOptionType) => boolean);
    treeNodeFilterProp?: string;
    onSelect?: SelectProps<OptionType>['onSelect'];
    onDeselect?: SelectProps<OptionType>['onDeselect'];
    showCheckedStrategy?: CheckedStrategy;
    treeNodeLabelProp?: string;
    fieldNames?: FieldNames;
    multiple?: boolean;
    treeCheckable?: boolean | React.ReactNode;
    treeCheckStrictly?: boolean;
    labelInValue?: boolean;
    treeData?: OptionType[];
    treeDataSimpleMode?: boolean | SimpleModeConfig;
    loadData?: (dataNode: LegacyDataNode) => Promise<unknown>;
    treeLoadedKeys?: React.Key[];
    onTreeLoad?: (loadedKeys: React.Key[]) => void;
    treeDefaultExpandAll?: boolean;
    treeExpandedKeys?: React.Key[];
    treeDefaultExpandedKeys?: React.Key[];
    onTreeExpand?: (expandedKeys: React.Key[]) => void;
    virtual?: boolean;
    listHeight?: number;
    listItemHeight?: number;
    onDropdownVisibleChange?: (open: boolean) => void;
    treeLine?: boolean;
    treeIcon?: IconType;
    showTreeIcon?: boolean;
    switcherIcon?: IconType;
    treeMotion?: any;
}
declare const GenericTreeSelect: (<ValueType = any, OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType>(props: TreeSelectProps<ValueType, OptionType> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<BaseSelectRef>;
}) => React.ReactElement) & {
    TreeNode: typeof TreeNode;
    SHOW_ALL: typeof SHOW_ALL;
    SHOW_PARENT: typeof SHOW_PARENT;
    SHOW_CHILD: typeof SHOW_CHILD;
};
export default GenericTreeSelect;
