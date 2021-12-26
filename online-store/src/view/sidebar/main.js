import './style.css';
import React, {Component} from 'react';
import Group from './group/main';

class Sidebar extends Component {
    render() {
        const groups = [
            {
                name: 'Computer',
                collection: [
                    {
                        id: 'computer_1',
                        name: 'Computer 1',
                        images: 'Image 1',
                        descriptions: 'Description'
                    },
                    {
                        id: 'computer_2',
                        name: 'Computer 2',
                        images: 'Image 2',
                        descriptions: 'Description'
                    },
                    {
                        id: 'computer_3',
                        name: 'Computer 3',
                        images: 'Image 3',
                        descriptions: 'Description'
                    }
                ]
            },
            {
                name: 'Phone',
                collection: [
                    {
                        id: 'phone_1',
                        name: 'Phone 1',
                        images: 'Image 1',
                        descriptions: 'Description'
                    },
                    {
                        id: 'phone_2',
                        name: 'Phone 2',
                        images: 'Image 2',
                        descriptions: 'Description'
                    },
                    {
                        id: 'phone_3',
                        name: 'Phone 3',
                        images: 'Image 3',
                        descriptions: 'Description'
                    }
                ]
            },
            {
                name: 'Tablet',
                collection: [
                    {
                        id: 'tablet_1',
                        name: 'Tablet 1',
                        images: 'Image 1',
                        descriptions: 'Description'
                    },
                    {
                        id: 'tablet_2',
                        name: 'Tablet 2',
                        images: 'Image 2',
                        descriptions: 'Description'
                    },
                    {
                        id: 'tablet_3',
                        name: 'Tablet 3',
                        images: 'Image 3',
                        descriptions: 'Description'
                    }
                ]
            },
            {
                name: 'Other',
                collection: [
                    {
                        id: 'other_1',
                        name: 'Other 1',
                        images: 'Image 1',
                        descriptions: 'Description'
                    },
                    {
                        id: 'other_2',
                        name: 'Other 2',
                        images: 'Image 2',
                        descriptions: 'Description'
                    },
                    {
                        id: 'other_3',
                        name: 'Other 3',
                        images: 'Image 3',
                        descriptions: 'Description'
                    }
                ]
            }
        ];

        return (
            <div className="sidebar flex-justify-center">
                {groups.map((group, index) =>
                    <Group key={index} name={group.name} collestion={group.collection} />
                )}
            </div>
        );
    }
}

export default Sidebar;