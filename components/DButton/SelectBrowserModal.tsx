import React, { FC, useState } from 'react'
import style from './style.module.css';
import withClickOutside, { WithClickOutsideProps } from '@/hocs/withClickOutside';
import { ProductBrowserLinks, ProductLinks } from '@/app/products/preloaded';
import clsx from 'clsx';

type SelectBrowserModalProps = {
    blockScroll: boolean,
    links: ProductBrowserLinks | ProductLinks,
    isEmbeded?: boolean
}

type Provider = {
  id: string,
  title: string,
  store: string,
  icon: string,
  uniqueSubtitle?: string,
}


const SelectBrowserModal: FC<SelectBrowserModalProps & WithClickOutsideProps> = ({
    toggleShow,
    isShow,
    refElement,
    links,
    isEmbeded
  }) => {
    
  const AVAILABLE_PLATFORMS = Object.keys(links);
  const ALL_PROVIDERS:Provider[] = [
    {
      id:"d4858a5a-95f5-4092-991f-960a92b4a2c3",
      title: "Chrome",
      store: "CHROME",
      icon: "CHROME"
    },
    {
      id:"62dfc42b-2e0b-4af1-992b-8366e55925d0",
      title: "Firefox",
      store: "FIREFOX",
      icon: "FIREFOX"
    },
    {
     id:"d6eeea55-0cc9-491b-9dba-8ddfa768240e",
      title: "Brave",
      store: "CHROME",
      icon: "BRAVE"
    },
    {
     id:"1f7d5e9f-5434-4ae8-adc0-51c63ee5286d",
      title: "Microsoft Edge",
      store: AVAILABLE_PLATFORMS.indexOf("EDGE") !== -1 ? "EDGE" : "CHROME",
      icon: "EDGE"
    },
    {
     id:"1d998120-f9b4-4e31-ac04-d7b5d9b670c9",
      title: "Opera",
      store: "CHROME",
      icon: "OPERA",
    },
    {
     id:"57f7f6e9-f8ce-48b5-8ea3-47c8c1993190",
      title: "Android",
      store: "FIREFOX",
      icon: "ANDROIDFIREFOX",
      uniqueSubtitle: "Firefox, Mozilla Add-ons"
    }
  ];

  // Chrome is always available, so MS Edge key is not as important there
  const FILTERED_PROVIDERS = ALL_PROVIDERS.filter(p => AVAILABLE_PLATFORMS.indexOf(p.store) !== -1);

  const [selected, setSelected] = useState<Provider>(FILTERED_PROVIDERS[0])

  const handleInstallClick = () => {
    const currentLink = links[selected.store as keyof typeof links];
    if(currentLink && currentLink !== "") {
      window.location.href = currentLink;
    }
  }
    
  return (
    <div className={style.content}>
      {isEmbeded 
      ?   <button onClick={toggleShow} className={style.install_btn}>
            <img src="/icons/download.svg" alt="ic" />
            <span>Install</span>
          </button>
      :   <button onClick={toggleShow} className={style.wrongbrowser_btn}>
            Not your browser?
          </button>
      }

      <div className={`${style.modal} ${isShow ? style.modal_visible : ""}`} aria-hidden={!isShow}>
        <div ref={refElement} className={style.modal_block}>
          <h3 className={style.modal_title}>Choose your platform</h3>
          <div className={style.modal_content}>
            {FILTERED_PROVIDERS.map(provider => <SelectProviderRadioItem 
              selected={selected}
              setSelected={setSelected}
              id={provider.id}
              key={provider.id}
              title={provider.title}  
              store={provider.store}  
              icon={provider.icon}  
              uniqueSubtitle={provider.uniqueSubtitle}  
            />)}
            
              <div className={style.modal_buttons}>
                <button onClick={toggleShow}><span>Close</span></button>
                <button onClick={handleInstallClick} className={style.modal_btn_download}>
                  <img src="/icons/download.svg" alt="ic" />
                  <span>Install</span>
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectProviderRadioItem:FC<Provider & {
  selected: Provider;
  setSelected: React.Dispatch<React.SetStateAction<Provider>>
}> = ({title,store,icon,uniqueSubtitle, id, selected, setSelected}) => {
  const unchecked:React.JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" clipRule="evenodd"></path></svg>;
  const checked:React.JSX.Element = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="currentColor"><path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></path><path fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clipRule="evenodd"></path></g></svg>;
  
  const STORE_NAME = {
    "CHROME": "Chrome Web Store",
    "FIREFOX": "Mozilla Add-ons",
    "EDGE": "Edge Add-ons"
  }

  const handleClick = () => {
    setSelected({
      title, store, icon, uniqueSubtitle, id
    })
  }
  
  return (
  <div onClick={handleClick} className={clsx(style.modal_item, selected.id === id  && style.modal_item__selected)}>
    <div className={style.modal_item_content}>
      <div className={style.modal_item_logo}>
        <img src={`/icons/browsers/${icon}.svg`} alt="" />
      </div>
      <span className={style.modal_item_title}>{title}</span>
      <span className={style.modal_item_platform}>({ uniqueSubtitle ? uniqueSubtitle : STORE_NAME[store as keyof typeof STORE_NAME]})</span>
    </div>

    <div className={style.checkbox}>
      {selected.id === id 
      ? checked
      : unchecked}
    </div>
  </div>
  )
}

export default withClickOutside<SelectBrowserModalProps>(SelectBrowserModal);