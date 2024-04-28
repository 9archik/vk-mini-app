import { RouteWithRoot, createHashRouter } from '@vkontakte/vk-mini-apps-router';

// Массив объектов, указывающих маршруты
const routes: RouteWithRoot[] = [
  {
    path: '/',            // Путь
    panel: 'news_list_panel',  // Желаемый Panel
    view: 'default_view', // Желаемый View
    root: 'default_root', // Желаемый Root
  },
  {
    path: `/:id`,
    panel: 'news_item_panel',
    view: 'default_view',
    root: 'default_root',
  },
  // Другие маршруты...
]

// Передайте список маршрутов в функцию создания роутера
export const router = createHashRouter(routes);
