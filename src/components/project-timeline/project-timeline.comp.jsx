import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import MusikinSite from '../../assets/img/02a.jpg';
import ReadmeGen from '../../assets/img/01.jpg';
import BoredApp from '../../assets/img/02.jpg';


const ProjectTimeline = () => {
    return (
        <div id='projects'>
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* MusikinSite */}
                    <ImageEvent
                        date="09/26/2020"
                        className="text-center"
                        text="JQuery App"
                        src={MusikinSite}
                        alt="JQuery App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an app that searches music lyrics, info on artist, and music video!
                        <hr />

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://sltang0815.github.io/MusikinSite/"
                                    target="_blank"
                                >
                                    SEE LIVE
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/Sltang0815/MusikinSite"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="Coming Soon!...."
                                    target="_blank"
                                >
                                    WATCH VIDEO
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* ReadmeGen */}
                    <ImageEvent
                        date="10/17/2020"
                        className="text-center"
                        text="Command-line, Node.js App"
                        src={ReadmeGen}
                        alt="Command-line, Node.js App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an app that creates ReadMe's for future projects!
                        <hr />

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                                <UrlButton
                                    href="https://github.com/Moniqueemh/ReadMe-Generator"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="https://drive.google.com/file/d/1e00E6LRF3XW4lufle1exPT0nPDL28T3Y/view"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                    {/* Project: 2 */}
                    <ImageEvent
                        date="11/24/2020"
                        className="text-center"
                        text="Handlebars App"
                        src={BoredApp}
                        alt="Handlebars App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is an app for bored people! If you can't find something to do, look for events!
                        <hr />

                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://ournewproject2.herokuapp.com/"
                                    target="_blank"
                                >
                                    SEE LIVE
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/Moniqueemh/TeamAthena-Project2"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="Coming Soon!...."
                                    target="_blank"
                                >
                                    WATCH VIDEO
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline