export const SHOW_CATEGORY = 'SHOW_CATEGORY';

export const showCategory = (categoryName) => {
  return { type: SHOW_CATEGORY, categoryName: categoryName };
};