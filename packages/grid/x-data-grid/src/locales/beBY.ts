import { enUS as beBYCore } from '@mui/material/locale';
import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';

type PluralForm = {
  one: string;
  twoToFour: string;
  other: string;
};

const getPluralForm = (count: number, options: PluralForm) => {
  let pluralForm = options.other;
  const lastDigit = count % 10;

  if (lastDigit > 1 && lastDigit < 5 && (count < 10 || count > 20)) {
    pluralForm = options.twoToFour;
  } else if (lastDigit === 1 && count % 100 !== 11) {
    pluralForm = options.one;
  }

  return `${count} ${pluralForm}`;
};

const beBYGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Няма радкоў',
  noResultsOverlayLabel: 'Дадзеныя не знойдзены.',
  // errorOverlayDefaultLabel: 'An error occurred.',

  // Density selector toolbar button text
  toolbarDensity: 'Вышыня радка',
  toolbarDensityLabel: 'Вышыня радка',
  toolbarDensityCompact: 'Кампактны',
  toolbarDensityStandard: 'Стандартны',
  toolbarDensityComfortable: 'Камфортны',

  // Columns selector toolbar button text
  toolbarColumns: 'Слупкі',
  toolbarColumnsLabel: 'Выберыце слупкі',

  // Filters toolbar button text
  toolbarFilters: 'Фільтры',
  toolbarFiltersLabel: 'Паказаць фільтры',
  toolbarFiltersTooltipHide: 'Схаваць фільтры',
  toolbarFiltersTooltipShow: 'Паказаць фільтры',
  toolbarFiltersTooltipActive: (count) =>
    getPluralForm(count, {
      one: 'актыўны фільтр',
      twoToFour: 'актыўных фільтра',
      other: 'актыўных фільтраў',
    }),

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Пошук…',
  toolbarQuickFilterLabel: 'Пошук',
  toolbarQuickFilterDeleteIconLabel: 'Ачысціць',

  // Export selector toolbar button text
  toolbarExport: 'Экспарт',
  toolbarExportLabel: 'Экспарт',
  toolbarExportCSV: 'Спампаваць у фармаце CSV',
  toolbarExportPrint: 'Друк',
  toolbarExportExcel: 'Спампаваць у фармаце Excel',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Знайсці слупок',
  columnsPanelTextFieldPlaceholder: 'Загаловак слупка',
  columnsPanelDragIconLabel: 'Змяніць чарговасць слупкоў',
  columnsPanelShowAllButton: 'Паказаць усе',
  columnsPanelHideAllButton: 'Схаваць усе',

  // Filter panel text
  filterPanelAddFilter: 'Дадаць фільтр',
  filterPanelDeleteIconLabel: 'Выдаліць',
  filterPanelLinkOperator: 'Лагічныя аператары',
  filterPanelOperators: 'Аператары',

  // TODO v6: rename to filterPanelOperator
  filterPanelOperatorAnd: 'І',
  filterPanelOperatorOr: 'Або',
  filterPanelColumns: 'Слупкі',
  filterPanelInputLabel: 'Значэнне',
  filterPanelInputPlaceholder: 'Значэнне фільтра',

  // Filter operators text
  filterOperatorContains: 'змяшчае',
  filterOperatorEquals: 'роўны',
  filterOperatorStartsWith: 'пачынаецца з',
  filterOperatorEndsWith: 'скончваецца на',
  filterOperatorIs: 'роўны',
  filterOperatorNot: 'не роўны',
  filterOperatorAfter: 'больш чым',
  filterOperatorOnOrAfter: 'больш ці роўны',
  filterOperatorBefore: 'меньш чым',
  filterOperatorOnOrBefore: 'меньш ці роўны',
  filterOperatorIsEmpty: 'пусты',
  filterOperatorIsNotEmpty: 'не пусты',
  filterOperatorIsAnyOf: 'усякі з',

  // Filter values text
  filterValueAny: 'усякі',
  filterValueTrue: 'праўда',
  filterValueFalse: 'няпраўда',

  // Column menu text
  columnMenuLabel: 'Меню',
  columnMenuShowColumns: 'Паказаць слупкі',
  columnMenuFilter: 'Фільтр',
  columnMenuHideColumn: 'Схаваць',
  columnMenuUnsort: 'Скасаваць сартыроўку',
  columnMenuSortAsc: 'Сартыраваць па нарастанню',
  columnMenuSortDesc: 'Сартыраваць па спаданню',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    getPluralForm(count, {
      one: 'актыўны фільтр',
      twoToFour: 'актыўных фільтра',
      other: 'актыўных фільтраў',
    }),
  columnHeaderFiltersLabel: 'Паказаць фільтры',
  columnHeaderSortIconLabel: 'Сартыраваць',

  // Rows selected footer text
  footerRowSelected: (count) =>
    getPluralForm(count, {
      one: 'абраны радок',
      twoToFour: 'абраных радка',
      other: 'абраных радкоў',
    }),

  // Total row amount footer text
  footerTotalRows: 'Усяго радкоў:',

  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} з ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Выбар сцяжка',
  checkboxSelectionSelectAllRows: 'Абраць усе радкі',
  checkboxSelectionUnselectAllRows: 'Скасаваць выбар усіх радкоў',
  checkboxSelectionSelectRow: 'Абраць радок',
  checkboxSelectionUnselectRow: 'Скасаваць выбар радка',

  // Boolean cell text
  booleanCellTrueLabel: 'праўда',
  booleanCellFalseLabel: 'няпраўда',

  // Actions cell more text
  actionsCellMore: 'больш',

  // Column pinning text
  pinToLeft: 'Замацаваць злева',
  pinToRight: 'Замацаваць справа',
  unpin: 'Адмацаваць',

  // Tree Data
  treeDataGroupingHeaderName: 'Група',
  treeDataExpand: 'паказаць даччыныя элементы',
  treeDataCollapse: 'схаваць даччыныя элементы',

  // Grouping columns
  groupingColumnHeaderName: 'Група',
  groupColumn: (name) => `Групаваць па ${name}`,
  unGroupColumn: (name) => `Разгрупаваць па ${name}`,

  // Master/detail
  detailPanelToggle: 'Дэталі',
  expandDetailPanel: 'Разгарнуць',
  collapseDetailPanel: 'Згарнуць',

  // Row reordering text
  rowReorderingHeaderName: 'Змяненне чарговасці радкоў',

  // Aggregation
  aggregationMenuItemHeader: "Аб'яднанне дадзеных",
  aggregationFunctionLabelSum: 'сума',
  aggregationFunctionLabelAvg: 'сярэдняе',
  aggregationFunctionLabelMin: 'мінімум',
  aggregationFunctionLabelMax: 'максімум',
  aggregationFunctionLabelSize: 'памер',
};

export const beBY: Localization = getGridLocalization(beBYGrid, beBYCore);