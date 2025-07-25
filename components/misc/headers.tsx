import React from 'react'
import { ThemeSwitcher } from './theme-switcher'
import { menuItems } from '@/app/data/index';
import { HeaderLink } from './header-link';
import { AdditionalInfoDialog } from './additional-info-dialog';

const Header = () => {
    return (
        <div>
            <div className='flex flex-row justify-between items-center w-full'>
                <div className='flex flex-row gap-3 font-medium text-black items-start'>
                    {
                        menuItems.map((item) => (
                            <HeaderLink key={item.url} href={item.url}>{item.label}</HeaderLink>
                        ))
                    }
                </div>
                <div>
                    <AdditionalInfoDialog/>
                    <ThemeSwitcher/>
                </div>
            </div>

        </div>
    )
}

export default Header
