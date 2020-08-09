import React from 'react';

const About = () => {
    return (
        <>
            <h2 className='title'>
                Data Peserta Sanbercode Bootcamp Reactjs
            </h2>
            
            <table>
                <tbody>
                <tr>
                    <td className='ten'>1.</td>
                    <td className='thirty'><strong>Nama</strong></td>
                    <td className='ten'>:</td>
                    <td className='sixty'>Khafit Bimo Prasetyo</td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td><strong>Email</strong></td>
                    <td>:</td>
                    <td>khafit.bimo@gmail.com</td>
                </tr>
                <tr>
                    <td>3.</td>
                    <td><strong>Sistem Operasi yang digunakan</strong></td>
                    <td>:</td>
                    <td>Windows 10</td>
                </tr>
                <tr>
                    <td>4.</td>
                    <td><strong>Akun Github</strong></td>
                    <td>:</td>
                    <td>https://github.com/khafitbimo</td>
                </tr>
                <tr>
                    <td>5.</td>
                    <td><strong>Akun Telegram</strong></td>
                    <td>:</td>
                    <td>@khafitbimo</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default About