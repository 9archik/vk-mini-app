import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import { useActiveVkuiLocation, useGetPanelForView } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel, Button } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import "@vkontakte/vkui/dist/components.css"
import "@vkontakte/vkui/dist/vkui.css";
import NewsList from '../pages/NewsList/NewsList';

function App() {

  const { view: activeView } = useActiveVkuiLocation();
  const activePanel = useGetPanelForView('default_view'); 

  const routeNavigator = useRouteNavigator();


  return <Root activeView={`${activeView}`}>
      <View nav="default_view" activePanel={`${activePanel}`}>
        <Panel nav="news_list_panel">
          <NewsList/>
        </Panel>
        <Panel nav="news_item_panel"></Panel>
      </View>

    </Root>
}

export default App;
