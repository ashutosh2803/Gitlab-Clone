import Button from '@restart/ui/esm/Button';
import React from 'react'
import { Card } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const HomePageContent = () => {
    return (
        <div>
            <div className="d-flex justify-content-evenly flex-wrap align-items-center">
                <div>
                    <div className="display-4 fw-bold">The DevOps <br /> Platform has <br /> arrived.</div>
                    <div className="fs-4 fw-400">Deliver software faster with better <br /> security and collaboration in a <br /> single platform.</div>
                    <div className="my-2">
                        <Button className="btn btn-warning text-white fw-bold p-3 fs-5 rounded-3">Get Free Trial</Button>
                        <Button className="btn btn-white border-dark p-3 fs-5 mx-3 rounded-3">Watch Demo</Button>
                    </div>
                </div>
                <div>
                    <ReactPlayer url="https://youtu.be/3k3voddzJGs" />
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-between align-items-center my-2 mx-5">
                    <div><img style={{width: "100px"}} className="mx-2" src="https://about.gitlab.com/images/case_study_logos/GSsignature_Blue.png" alt="company_logo" /></div>
                    <div><img style={{width: "100px"}} className="mx-2" src="https://about.gitlab.com/images/organizations/logo_siemens_color.svg" alt="company_logo" /></div>
                    <div><img style={{width: "150px"}} className="mx-2" src="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-vert-500x200-2c50-p@2x.png" alt="company_logo" /></div>
                    <div><img style={{width: "100px"}} className="mx-2" src="https://about.gitlab.com/images/organizations/eesa-logo-color.svg" alt="company_logo" /></div>
                    <div><img style={{width: "200px"}} className="mx-2" src="https://www.inovex.de/wp-content/uploads/2021/03/technologie-partner-cncf.png" alt="company_logo" /></div>
                    <div><img style={{width: "200px"}} className="mx-2" src="https://softjourn.com/media/images/clients_logo/Ticketmaster-Logo-Azure-RGB.png" alt="company_logo" /></div>
                </div>
                <div>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </div>
        </div>
    )
}

export default HomePageContent;
