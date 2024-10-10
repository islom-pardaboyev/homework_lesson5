import React from 'react'
import Button from './Button'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

function Footer() {
    const t = useTranslations("IndexPage.footer");
  return (
<footer>
    <div className='container'>
        <div className='grid py-[48px] grid-cols-4 border-b border-gray-500'>
            <div className="col-span-1 flex flex-col gap-[50px]">
                <h1 className='font-bold text-2xl'>Funiro.</h1>
                <p className='text-gray'>{t('about_text')}</p>
            </div>
            <div className="col-span-1 flex flex-col gap-[55px] ">
                <h1 className='font-medium text-gray capitalize'>{t('links.title')}</h1>
                <nav className='flex flex-col gap-[46px] font-medium'>
                    <p className='capitalize'>{t('links.home')}</p>
                    <p className='capitalize'>{t('links.shop')}</p>
                    <p className='capitalize'>{t('links.blog')}</p>
                    <p className='capitalize'>{t('links.contact')}</p>
                </nav>
            </div>
            <div className="col-span-1 capitalize flex flex-col gap-[55px] ">
                <h1 className='font-medium text-gray'>{t('help.title')}</h1>
                <nav className='flex flex-col gap-[46px] font-medium'>
                    <a href="#">{t('help.payment_options')}</a>
                    <a href="#">{t('help.returns')}</a>
                    <a href="#">{t('help.privacy_policies')}</a>
                </nav>
            </div>
            <div className="col-span-1 flex flex-col gap-[55px] ">
                <h1 className='font-medium text-gray'>{t('newsletter.title')}</h1>
                <label htmlFor="" className='flex items-center gap-[11px]'>
                    <input type="text" placeholder={t('newsletter.input_placeholder')} className='outline-none border-b placeholder:capitalize' />
                    <Button styles={'uppercase font-medium border-b'} title={t('newsletter.button_text')}/>
                </label>
            </div>
        </div>
        <p className='my-[38px]'>{t('newsletter.copyright')}</p>
    </div>
</footer>
  )
}

export default Footer